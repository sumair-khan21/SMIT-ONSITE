import React from 'react';

const FirstPost = () => (
  <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#131a2b] to-[#1e2746] text-[#e3e8ee] py-16 px-4 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold mb-4 text-[#6c8ae4]">First Post - Learn Next.js</h1>
    <p className="max-w-xl text-lg text-[#b0b8c9] mb-6 text-center">
      Next.js is a powerful React framework for building fast, scalable web applications. It offers file-based routing, server-side rendering, and much more. Start your journey with Next.js today!
    </p>
    <span className="text-sm text-[#b0b8c9]">Published: Dec 12, 2025</span>
  </section>
);

export default FirstPost;
