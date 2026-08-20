import { Link } from 'react-router-dom'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

const posts = [
  {
    title: 'The Future of AI Website Builders',
    excerpt: 'How artificial intelligence is revolutionizing web development and what it means for creators.',
    date: 'Jan 10, 2026',
    category: 'AI & Technology',
    readTime: '8 min read',
  },
  {
    title: 'Design Trends for 2026',
    excerpt: 'The latest design trends shaping the web and how to implement them in your projects.',
    date: 'Dec 28, 2025',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    title: 'Building Faster Websites',
    excerpt: 'Performance optimization techniques that can dramatically improve your site speed.',
    date: 'Dec 15, 2025',
    category: 'Performance',
    readTime: '10 min read',
  },
  {
    title: 'From Idea to Launch in 30 Seconds',
    excerpt: 'A complete walkthrough of creating and deploying a website with FluxWith.',
    date: 'Nov 30, 2025',
    category: 'Tutorials',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar />
      
      {/* Hero */}
      <section style={{ padding: '100px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            fontSize: 13, 
            fontWeight: 600, 
            color: '#3b82f6', 
            textTransform: 'uppercase', 
            letterSpacing: 3,
            display: 'block',
            marginBottom: 16
          }}>
            Resources
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: 20,
            letterSpacing: '-0.03em'
          }}>
            Blog
          </h1>
          <p style={{ 
            fontSize: 17, 
            color: '#888', 
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Insights, tutorials, and updates from the FluxWith team.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 20,
          }}>
            {posts.map((post) => (
              <article
                key={post.title}
                style={{
                  background: '#111',
                  border: '1px solid #1a1a1a',
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {/* Image placeholder */}
                <div style={{
                  height: 180,
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 14, color: '#444' }}>Featured Image</span>
                </div>
                
                <div style={{ padding: '28px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 12, 
                    marginBottom: 12 
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: 12,
                      background: '#1a1a1a',
                      color: '#888',
                      fontSize: 11,
                      fontWeight: 500,
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: 12, color: '#555' }}>{post.readTime}</span>
                  </div>
                  
                  <h2 style={{ 
                    fontSize: 18, 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: 10,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h2>
                  
                  <p style={{ 
                    fontSize: 14, 
                    color: '#888', 
                    lineHeight: 1.7,
                    marginBottom: 16
                  }}>
                    {post.excerpt}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <span style={{ fontSize: 13, color: '#555' }}>{post.date}</span>
                    <span style={{ 
                      fontSize: 13, 
                      fontWeight: 500,
                      color: '#3b82f6',
                      transition: 'color 0.15s ease',
                    }}>
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div style={{
            marginTop: 64,
            padding: '48px',
            background: '#111',
            borderRadius: 20,
            textAlign: 'center',
            border: '1px solid #1a1a1a',
          }}>
            <h2 style={{ 
              fontSize: 24, 
              fontWeight: 600, 
              color: '#fff', 
              marginBottom: 12,
              letterSpacing: '-0.02em'
            }}>
              Stay updated
            </h2>
            <p style={{ 
              fontSize: 15, 
              color: '#888', 
              marginBottom: 28,
              maxWidth: 400,
              margin: '0 auto 28px',
              lineHeight: 1.7
            }}>
              Get the latest articles and updates delivered to your inbox.
            </p>
            
            <div style={{
              display: 'flex',
              gap: 8,
              maxWidth: 420,
              margin: '0 auto',
              background: '#0a0a0a',
              border: '1px solid #222',
              borderRadius: 10,
              padding: '6px',
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  padding: '12px 16px',
                  fontSize: 14,
                }}
              />
              <button
                style={{
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
              >
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
