// File: src/app/pages/products/[productId]/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px',
      minHeight: '60vh'
    }}>
      <h1 style={{ fontSize: '100px', margin: '0' }}>404</h1>
      <h2>Page Nahi Mila! 😢</h2>
      <p>Jo page tum dhoond rahe ho woh exist nahi karta.</p>
      
      <Link 
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 30px',
          backgroundColor: 'blue',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        🏠 Home Page pe Jao
      </Link>
    </div>
  );
}