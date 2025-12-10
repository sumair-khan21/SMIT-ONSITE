import Navbar from '../../components/navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">
              123 Business Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">
              +1 (555) 123-4567<br />
              Mon-Fri, 9am-6pm EST<br />
              Available for calls
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              info@mybrand.com<br />
              support@mybrand.com<br />
              We respond within 24 hours
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Send us a Message
          </h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Please share your message or inquiry..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-500"
                required
              />
              <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                I agree to the privacy policy and terms of service
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-emerald-700 transition duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What is your response time?",
                a: "We typically respond to inquiries within 24 hours during business days.",
              },
              {
                q: "Do you offer phone support?",
                a: "Yes, we offer phone support Monday to Friday, 9am to 6pm EST.",
              },
              {
                q: "How can I track my request?",
                a: "You'll receive a confirmation email with a reference number to track your request.",
              },
              {
                q: "What are your business hours?",
                a: "We're open Monday to Friday, 9am to 6pm EST. Emergencies can be handled outside hours.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-emerald-600 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-emerald-600 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8">Follow Us on Social Media</h3>
          <div className="flex justify-center gap-8">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition"
                title={social}
              >
                <span className="text-2xl">🔗</span>
              </a>
            ))}
          </div>
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
