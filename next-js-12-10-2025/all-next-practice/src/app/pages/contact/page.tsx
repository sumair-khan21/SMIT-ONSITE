
"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#3a4a7a' }}>Contact Us</h1>
      {submitted ? (
        <p style={{ color: '#b0b8c9', fontSize: '1.2rem' }}>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
          style={{
            display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 400, marginTop: 24
          }}
        >
          <input type="text" placeholder="Your Name" required style={{
            padding: 12, borderRadius: 8, border: 'none', background: '#131a2b', color: '#e3e8ee', fontSize: '1rem', outline: 'none'
          }} />
          <input type="email" placeholder="Your Email" required style={{
            padding: 12, borderRadius: 8, border: 'none', background: '#131a2b', color: '#e3e8ee', fontSize: '1rem', outline: 'none'
          }} />
          <textarea placeholder="Your Message" required rows={4} style={{
            padding: 12, borderRadius: 8, border: 'none', background: '#131a2b', color: '#e3e8ee', fontSize: '1rem', outline: 'none', resize: 'vertical'
          }} />
          <button type="submit" style={{
            background: 'linear-gradient(90deg, #1e2746 0%, #0a0a23 100%)',
            color: '#e3e8ee', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s'
          }}>
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;