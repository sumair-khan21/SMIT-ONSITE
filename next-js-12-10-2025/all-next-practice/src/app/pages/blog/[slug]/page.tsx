// File: src/app/blog/[slug]/page.js
// Ye DYNAMIC page hai - kisi bhi slug ke liye kaam karega

export default function BlogPost({ params }: { params: { slug: string } }) {
  // params.slug mein URL ki value aayegi
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Tum ye post dekh rahe ho: <strong>{slug}</strong></p>
      
      {/* Asli app mein yahan slug se data fetch karoge */}
      <p>Is slug ke saath database se post fetch karke dikhao...</p>
    </div>
  );
}

// Agar /blog/nextjs-seekho kholo → slug = "nextjs-seekho"
// Agar /blog/react-basics kholo → slug = "react-basics"
// Agar /blog/kuch-bhi kholo → slug = "kuch-bhi"