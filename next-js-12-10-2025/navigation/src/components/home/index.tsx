import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Welcome to MyBrand</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We build thoughtful products and delightful experiences that help teams and
          individuals do their best work.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/about" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition">About Us</Link>
          <Link href="/contact" className="bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">Contact</Link>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: 'Fast', desc: 'Optimized performance and fast load times.' },
    { title: 'Reliable', desc: 'Built with best practices and thorough testing.' },
    { title: 'Secure', desc: 'Security-first approach across the stack.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-12 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Start your project with us</h3>
        <p className="mb-6 text-gray-100/90">Let’s build something great together — we’ll help you get there.</p>
        <Link href="/contact" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition">Get Started</Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
