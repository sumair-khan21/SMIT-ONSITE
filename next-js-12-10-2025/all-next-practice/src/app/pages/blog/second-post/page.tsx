import React from 'react';

const SecondPost = () => (
  <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#131a2b] to-[#1e2746] text-[#e3e8ee] py-16 px-4 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold mb-4 text-[#6c8ae4]">Second Post - React Basics</h1>
    <p className="max-w-xl text-lg text-[#b0b8c9] mb-6 text-center">
      React is a JavaScript library for building user interfaces. Learn about components, props, state, and hooks to create interactive UIs efficiently.
    </p>
    <span className="text-sm text-[#b0b8c9]">Published: Dec 12, 2025</span>
  </section>
);

export default SecondPost;
