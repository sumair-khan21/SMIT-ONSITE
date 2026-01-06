// File: src/app/(shop)/product/error.tsx
'use client';  // YE ZAROOR LIKHO - Error components client side hone chahiye

export default function Error({ error, reset }) {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#ffebee', 
      border: '2px solid red',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h2>😕 Kuch Galat Ho Gaya!</h2>
      <p style={{ color: 'red' }}>{error.message}</p>
      
      <button 
        onClick={() => reset()}
        style={{
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Dobara Try Karo
      </button>
    </div>
  );
}