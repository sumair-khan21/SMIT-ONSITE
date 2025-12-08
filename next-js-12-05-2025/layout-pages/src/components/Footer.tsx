import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 border-t border-white/5 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                                B
                            </div>
                            <span className="text-xl font-bold text-white">Brand.</span>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-500 max-w-sm">
                            Crafting exceptional digital experiences with precision and passion. We help forward-thinking companies build the future.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
                                    aria-label={social}
                                >
                                    <span className="sr-only">{social}</span>
                                    {/* Simplified Icon Placeholder */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            {['Features', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-indigo-400 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-indigo-400 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                        <p className="text-sm text-zinc-500 mb-4">
                            Subscribe to our newsletter for the latest insights.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
                            />
                            <button
                                type="button"
                                className="bg-white text-zinc-950 px-4 py-3 rounded-lg hover:bg-zinc-200 transition-colors font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Brand Name. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
