import Link from 'next/link'
import React from 'react'

const ProductPage = () => {
    const products = [
    { id: 1, name: 'Laptop', price: 150000 },
    { id: 2, name: 'Mobile Phone', price: 50000 },
    { id: 3, name: 'Tablet', price: 80000 },
    { id: 4, name: 'Headphones', price: 5000 },

    ]
  return (
    <>
    {
        products.map((item)=>{
            return (
            <Link href={`/pages/products/${item.id}`} >
            <div key={item.id} style={{
                    background: 'linear-gradient(135deg, #0a0a23 0%, #1e2746 100%)',
                    color: '#b0b8c9',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px 0 #1e2746cc',
                    margin: '20px 0',
                    maxWidth: '400px'
                  }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: 8, color: '#6c8ae4' }}>{item.name}</h2>
                    <p style={{ fontSize: '1.2rem' }}>Price: ₹{item.price}</p>
                  </div>
            
            </Link>
            )
        })
    }
    
    </>
  )
}

export default ProductPage
