import Navbar from '../../components/navbar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600">
            Discover our story, mission, and values
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Founded in 2020, we started with a simple vision: to make a difference
              in the lives of our customers through innovation and dedication.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              What began as a small startup has grown into a thriving company,
              thanks to the support of our amazing customers and talented team members.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to push boundaries and explore new possibilities,
              always keeping our core values at the heart of everything we do.
            </p>
          </div>
          <div className="bg-indigo-500 rounded-lg h-96 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Company Image</span>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-2xl font-bold text-indigo-600 mb-4">Our Mission</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver exceptional products and services that empower individuals
              and businesses to achieve their goals and create lasting impact in their
              communities.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-2xl font-bold text-indigo-600 mb-4">Our Vision</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be a global leader in innovation, recognized for our commitment to
              excellence, integrity, and creating positive change in the world.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace creativity and constantly seek new ways to solve problems.",
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and strong moral principles.",
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do.",
              },
              {
                title: "Teamwork",
                description: "We believe in the power of collaboration and mutual support.",
              },
              {
                title: "Customer Focus",
                description: "We put our customers first and prioritize their satisfaction.",
              },
              {
                title: "Sustainability",
                description: "We are committed to environmental and social responsibility.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h5 className="text-xl font-bold text-indigo-600 mb-2">
                  {value.title}
                </h5>
                <p className="text-gray-600 text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Highlight */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Team</h3>
          <p className="text-gray-600 text-lg text-center mb-8 leading-relaxed">
            Our diverse team of talented professionals brings expertise, creativity,
            and passion to every project. We are proud to work with individuals who
            share our values and commitment to excellence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="bg-indigo-200 rounded-full h-32 w-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">Team {member}</span>
                </div>
                <h5 className="font-bold text-gray-900">Team Member {member}</h5>
                <p className="text-gray-600 text-sm">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
          <p className="text-lg mb-8">Get in touch and let's create something amazing together.</p>
          <Link
            href="/contact"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-indigo-50 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 MyBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}