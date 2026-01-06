import Link from 'next/link';
import React from 'react';

const navStyle: React.CSSProperties = {
  width: '100%',
  background: 'linear-gradient(90deg, #0a0a23 0%, #1e2746 100%)',
  padding: '0.7rem 0',
  boxShadow: '0 2px 12px #1e2746cc',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const linkStyle: React.CSSProperties = {
  color: '#e3e8ee',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  margin: '0 1.5rem',
  padding: '8px 18px',
  borderRadius: 8,
  transition: 'background 0.2s, color 0.2s',
  background: 'transparent',
  letterSpacing: 1
};

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/pages/about" style={linkStyle}>
        About
      </Link>
      <Link href="/pages/contact" style={linkStyle}>
        Contact
      </Link>
      <Link href="/pages/blog" style={linkStyle}>
        Blog
      </Link>
       <Link href="/pages/products" style={linkStyle}>
        Products
      </Link>
       <Link href="/pages/users" style={linkStyle}>
        Users
      </Link>
    </nav>
  );
};

export default Navbar;