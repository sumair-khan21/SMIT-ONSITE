// File: src/app/(shop)/product/loading.tsx
// Jab tak products load ho rahe hain, ye dikhega

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '50vh'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid blue',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}>
      </div>
      <p style={{ marginTop: '20px' }}>Loading ho raha hai...</p>
      <p>Thoda wait karo</p>
    </div>
  );
}