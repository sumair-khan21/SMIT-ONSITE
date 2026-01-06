import React from 'react';

const About = () => {
  return (
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
      margin: '40px 0'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#3a4a7a' }}>About Us</h1>
      <p style={{ maxWidth: 600, fontSize: '1.2rem', lineHeight: 1.7, textAlign: 'center', color: '#b0b8c9' }}>
        Welcome to our website! We are passionate about building modern, interactive web experiences with a focus on design and usability. Our mission is to deliver high-quality solutions that delight users and drive results.
      </p>
    </section>
  );
};

export default About;