'use client'

import { useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Torus, Box, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Animated particle field component
function ParticleField({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25
      
      // Color variation between cyan and purple
      const mixRatio = Math.random()
      colors[i * 3] = (1 - mixRatio) * 0.608 // R
      colors[i * 3 + 1] = mixRatio * 0.96 + (1 - mixRatio) * 0.365 // G
      colors[i * 3 + 2] = mixRatio * 0.83 + (1 - mixRatio) * 0.898 // B
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Main floating orb with distortion
function FloatingOrb({ position = [0, 0, 0] as [number, number, number], color = '#00f5d4', speed = 2, distort = 0.4 }) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  )
}

// Geometric ring/torus
function FloatingRing({ position = [0, 0, 0] as [number, number, number], color = '#9b5de5', speed = 1.5 }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={1.5}>
      <Torus args={[1.2, 0.15, 16, 100]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  )
}

// Floating cube with wobble effect
function FloatingCube({ position = [0, 0, 0] as [number, number, number], color = '#f72585', speed = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Box args={[0.8, 0.8, 0.8]} position={position}>
        <MeshWobbleMaterial
          color={color}
          factor={0.4}
          speed={2}
          metalness={0.7}
          roughness={0.2}
        />
      </Box>
    </Float>
  )
}

// Small orbiting spheres
function OrbitingSpheres() {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  const spheres = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        Math.cos((i / 6) * Math.PI * 2) * 4,
        Math.sin((i / 6) * Math.PI * 2) * 2,
        Math.sin((i / 6) * Math.PI * 2) * 4,
      ] as [number, number, number],
      color: ['#00f5d4', '#00bbf9', '#9b5de5', '#f72585', '#ff6b35', '#ffc300'][i],
      scale: 0.15 + Math.random() * 0.15,
    }))
  }, [])

  return (
    <group ref={group}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.position}>
          <sphereGeometry args={[sphere.scale, 16, 16]} />
          <meshStandardMaterial
            color={sphere.color}
            emissive={sphere.color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Grid floor effect
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        color="#00f5d4"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

// Main 3D Scene
function Scene3D() {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 5, -5]} intensity={0.8} color="#00f5d4" />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#9b5de5" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#f72585"
      />

      {/* Main elements */}
      <FloatingOrb position={[0, 0, 0]} color="#00f5d4" speed={1.5} distort={0.35} />
      <FloatingRing position={[2.5, 1.5, -1]} color="#9b5de5" speed={2} />
      <FloatingCube position={[-2.5, -1, 1]} color="#f72585" speed={1.8} />
      
      {/* Secondary smaller orbs */}
      <FloatingOrb position={[3, -1.5, -2]} color="#00bbf9" speed={2.5} distort={0.5} />
      <Sphere args={[0.4, 32, 32]} position={[-3, 2, -1]}>
        <meshStandardMaterial
          color="#ffc300"
          metalness={0.9}
          roughness={0.1}
          emissive="#ffc300"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Orbital system */}
      <OrbitingSpheres />

      {/* Background particles */}
      <ParticleField count={300} />

      {/* Grid floor */}
      <GridFloor />

      {/* Controls - subtle auto rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

const examplePrompts = [
  'Create a coffee shop website with a dark theme',
  'Build a landing page for a fitness coaching app',
  'Design a minimal portfolio for a photographer',
  'Build an e-commerce store for handmade jewelry',
  'Make a SaaS product landing page with pricing',
]

const shinyGradientStyle = {
  backgroundImage:
    'linear-gradient(135deg, #00f5d4 0%, #00bbf9 30%, #9b5de5 60%, #f72585 100%)',
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
  WebkitTextFillColor: 'transparent' as const,
}

export default function Hero3D() {
  const [prompt, setPrompt] = useState('')

  return (
    <section
      id="product"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background effects */}
      <div className="flux-blob flux-blob-cyan" />
      <div className="flux-blob flux-blob-purple" />
      <div className="flux-blob flux-blob-pink" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
        {/* Left content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-flux-cyan/30 bg-flux-cyan/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-flux-cyan animate-pulse" />
            <span className="eyebrow text-xs">AI-Powered Building</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl font-bold leading-tight"
          >
            Describe a site.
            <br />
            Watch it{' '}
            <span className="shiny-text" style={shinyGradientStyle}>
              take shape.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-lg text-lg text-fume-light leading-relaxed"
          >
            FluxWith reads your written brief and forges a complete, editable website around it — 
            hero sections, feature grids, testimonials, pricing tables, and more. 
            Built in one pass and ready to publish in minutes.
          </motion.p>

          {/* Prompt input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-2"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder={examplePrompts[0]}
                className="flex-1 rounded-xl bg-void/50 px-5 py-4 font-mono text-sm text-bone placeholder:text-fume/60 focus:outline-none focus:ring-2 focus:ring-flux-cyan/50 transition-all"
              />
              <Link
                to="/signup"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Forge it
              </Link>
            </div>
          </motion.div>

          {/* Example prompts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {examplePrompts.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setPrompt(example)}
                className="rounded-full border border-line/50 bg-ash/50 px-4 py-2 text-xs text-fume transition-all hover:border-flux-cyan/50 hover:text-flux-cyan hover:bg-flux-cyan/10 focus:outline-none focus:ring-2 focus:ring-flux-cyan/30"
              >
                {example}
              </button>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-8 pt-4 border-t border-line/50"
          >
            {[
              { label: 'Sites Built', value: '50K+' },
              { label: 'Active Users', value: '12K+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-fume mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side - 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] lg:h-[600px]"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden liquid-glass">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              style={{ background: 'transparent' }}
            >
              <Scene3D />
            </Canvas>
          </div>
          
          {/* Floating badges around canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -left-4 top-1/4 hidden lg:block"
          >
            <div className="liquid-glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium">Live Preview</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute -right-4 bottom-1/4 hidden lg:block"
          >
            <div className="liquid-glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-flux-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-medium">AI Powered</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
