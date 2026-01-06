export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#1e2746] to-[#0a0a23] px-4 py-12">
      <section className="w-full max-w-md flex flex-col items-center bg-[#232c4b]/80 rounded-2xl shadow-2xl p-10 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-[#6c8ae4]">Login</h1>
        <form className="w-full flex flex-col gap-5">
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-[#181f36] text-[#e3e8ee] border border-[#232c4b] focus:outline-none focus:border-[#6c8ae4]" />
          <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg bg-[#181f36] text-[#e3e8ee] border border-[#232c4b] focus:outline-none focus:border-[#6c8ae4]" />
          <button type="submit" className="py-3 px-6 rounded-lg bg-[#6c8ae4] text-white font-bold hover:bg-[#3a4a7a] transition">Login</button>
        </form>
      </section>
    </main>
  );
}