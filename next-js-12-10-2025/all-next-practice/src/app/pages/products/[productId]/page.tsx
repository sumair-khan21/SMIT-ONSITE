import React from 'react';
import { notFound } from 'next/navigation';

const SingleProduct = ({params}: {params: {productId: string}}) => {
  const { productId } = params;

  // Check karo product exist karta hai ya nahi
  const validProducts = ['1', '2', '3', '4', '5'];

  if (!validProducts.includes(productId)) {
    notFound();  // Ye 404 page dikhayega!
  }

  return (
    <div>
      <h1>Product #{productId}</h1>
      <p>Ye product ki detail hai...</p>
      <div style={{
        border: '2px solid green',
        padding: '20px',
        marginTop: '20px'
      }}>
        <p>Yahan product ki poori detail hogi...</p>
        <p>Images, description, reviews wagera</p>
      </div>
    </div>
  )
}

export default SingleProduct
