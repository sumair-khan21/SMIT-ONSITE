import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      background: 'linear-gradient(90deg, #0a0a23 0%, #1e2746 100%)',
      color: '#b0b8c9',
      textAlign: 'center',
      padding: '1.2rem 0',
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: 1,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      marginTop: 0,
      boxShadow: '0 -2px 12px #1e2746cc'
    }}>
      &copy; {new Date().getFullYear()} Next.js Practice. All rights reserved.
    </footer>
  );
};

export default Footer;