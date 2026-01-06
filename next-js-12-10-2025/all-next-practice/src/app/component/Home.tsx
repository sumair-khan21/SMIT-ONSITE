import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a23 0%, #000 100%)',
        color: '#e3e8ee',
        padding: '40px 20px',
        borderRadius: '18px',
        boxShadow: '0 4px 32px 0 #1e2746cc',
        margin: 0
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: 16, color: '#3a4a7a', letterSpacing: 1 }}>Welcome to Next.js Site</h1>
        <p style={{ maxWidth: 600, fontSize: '1.3rem', lineHeight: 1.7, textAlign: 'center', color: '#b0b8c9', marginBottom: 32 }}>
          Experience a modern, interactive, and beautifully themed website built with Next.js 13+. Explore our pages and enjoy the black and dark blue gradient design.
        </p>
        <a href="/pages/about" style={{
          background: 'linear-gradient(90deg, #1e2746 0%, #0a0a23 100%)',
          color: '#e3e8ee',
          padding: '14px 36px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px #1e2746cc',
          transition: 'background 0.3s',
          marginTop: 12
        }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #0a0a23 0%, #1e2746 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #1e2746 0%, #0a0a23 100%)')}
        >
          Learn More About Us
        </a>
      </section>

      {/* Features Section */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(90deg, #131a2b 0%, #1e2746 100%)',
        color: '#e3e8ee',
        padding: '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#3a4a7a', marginBottom: 16 }}>Our Features</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: '#181f36', borderRadius: 12, padding: 24, minWidth: 220, textAlign: 'center', boxShadow: '0 2px 12px #1e2746cc' }}>
            <h3 style={{ color: '#6c8ae4', fontWeight: 600, marginBottom: 8 }}>Fast Performance</h3>
            <p style={{ color: '#b0b8c9' }}>Optimized for speed and smooth user experience.</p>
          </div>
          <div style={{ background: '#181f36', borderRadius: 12, padding: 24, minWidth: 220, textAlign: 'center', boxShadow: '0 2px 12px #1e2746cc' }}>
            <h3 style={{ color: '#6c8ae4', fontWeight: 600, marginBottom: 8 }}>Modern UI</h3>
            <p style={{ color: '#b0b8c9' }}>Sleek, responsive, and accessible design for all devices.</p>
          </div>
          <div style={{ background: '#181f36', borderRadius: 12, padding: 24, minWidth: 220, textAlign: 'center', boxShadow: '0 2px 12px #1e2746cc' }}>
            <h3 style={{ color: '#6c8ae4', fontWeight: 600, marginBottom: 8 }}>Easy Customization</h3>
            <p style={{ color: '#b0b8c9' }}>Flexible structure for rapid development and scaling.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(90deg, #0a0a23 0%, #1e2746 100%)',
        color: '#e3e8ee',
        padding: '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#3a4a7a', marginBottom: 12 }}>About Our Project</h2>
        <p style={{ maxWidth: 700, color: '#b0b8c9', fontSize: '1.15rem', textAlign: 'center' }}>
          This project demonstrates a professional Next.js setup with a custom dark blue and black theme, modular components, and a focus on user experience. Built for learning and rapid prototyping.
        </p>
      </section>

      {/* Call to Action Section */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(90deg, #1e2746 0%, #131a2b 100%)',
        color: '#e3e8ee',
        padding: '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#6c8ae4', marginBottom: 10 }}>Ready to Get Started?</h2>
        <p style={{ maxWidth: 600, color: '#b0b8c9', fontSize: '1.1rem', textAlign: 'center', marginBottom: 18 }}>
          Explore more pages or contact us for collaboration and feedback. We’re excited to help you build your next project!
        </p>
        <a href="/pages/contact" style={{
          background: 'linear-gradient(90deg, #3a4a7a 0%, #1e2746 100%)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px #1e2746cc',
          transition: 'background 0.3s',
        }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #1e2746 0%, #3a4a7a 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #3a4a7a 0%, #1e2746 100%)')}
        >
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Home;