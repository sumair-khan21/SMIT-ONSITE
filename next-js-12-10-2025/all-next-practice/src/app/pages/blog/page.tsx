// import Link from "next/link";

// export default function BlogPage() {
//   return (
//     <main className="flex flex-col min-h-[calc(100vh-120px)] w-full items-center justify-center bg-gradient-to-br from-[#0a0a23] to-[#1e2746] px-4 py-12">
//       <section className="w-full max-w-2xl flex flex-col items-center bg-[#181f36]/80 rounded-2xl shadow-2xl p-10 mb-8">
//         <h1 className="text-4xl font-extrabold mb-3 text-[#6c8ae4] tracking-wide">Our Blog</h1>
//         <p className="mb-8 text-lg text-[#b0b8c9] text-center">Check out our latest posts and explore web development topics!</p>
//         <div className="flex flex-col gap-6 w-full">
//           <Link href="/pages/blog/first-post" className="flex items-center gap-3 text-xl bg-[#232c4b] rounded-lg px-6 py-5 hover:bg-[#2d3860] transition font-semibold shadow border border-[#232c4b] hover:border-[#6c8ae4]">
//             <span className="text-2xl">📝</span>
//             <span>First Post - Learn Next.js</span>
//           </Link>
//           <Link href="/pages/blog/second-post" className="flex items-center gap-3 text-xl bg-[#232c4b] rounded-lg px-6 py-5 hover:bg-[#2d3860] transition font-semibold shadow border border-[#232c4b] hover:border-[#6c8ae4]">
//             <span className="text-2xl">📝</span>
//             <span>Second Post - React Basics</span>
//           </Link>
//           <Link href="/pages/blog/third-post" className="flex items-center gap-3 text-xl bg-[#232c4b] rounded-lg px-6 py-5 hover:bg-[#2d3860] transition font-semibold shadow border border-[#232c4b] hover:border-[#6c8ae4]">
//             <span className="text-2xl">📝</span>
//             <span>Third Post - JavaScript Tips</span>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// } 










// this is dynamic blog page to list all blog posts

import Link from 'next/link';

export default function BlogPage() {
  // Ye data database se aayega asli app mein
  const posts = [
    { slug: 'nextjs-seekho', title: 'Next.js Seekho' },
    { slug: 'react-basics', title: 'React Ki Buniyad' },
    { slug: 'javascript-tips', title: 'JavaScript Tips' },
    { slug: 'css-tricks', title: 'CSS Ke Tricks' },
  ];

  return (
    <div>
      <h1>Sab Blog Posts</h1>
      
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: '10px' }}>
          <Link href={`/pages/blog/${post.slug}`}>
            📝 {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

