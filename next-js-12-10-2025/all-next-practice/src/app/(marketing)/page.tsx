export default function HomePage() {
    return (
        <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a23] to-[#1e2746] px-4">
            <section className="w-full max-w-2xl flex flex-col items-center bg-[#181f36]/80 rounded-2xl shadow-2xl p-10">
                <h1 className="text-4xl font-extrabold mb-3 text-[#6c8ae4] tracking-wide">Welcome to Our Website!</h1>
                <p className="mb-4 text-lg text-[#b0b8c9] text-center">Best products at best prices. Discover our offerings and enjoy a seamless shopping experience.</p>
                <button className="mt-6 px-8 py-3 bg-[#6c8ae4] text-white font-semibold rounded-lg hover:bg-[#5a78d0] transition">Get Started</button>
            </section>
        </main>
    );
}