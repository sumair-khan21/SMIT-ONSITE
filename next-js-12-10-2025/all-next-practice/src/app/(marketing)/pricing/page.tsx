export default function PricingPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a23] to-[#1e2746] px-4 py-12">
      <section className="w-full max-w-2xl flex flex-col items-center bg-[#181f36]/80 rounded-2xl shadow-2xl p-10 mb-8">
        <h1 className="text-3xl font-bold mb-3 text-[#6c8ae4]">Pricing</h1>
        <div className="w-full flex flex-col gap-6">
          <div className="flex justify-between items-center bg-[#232c4b] rounded-lg px-6 py-4">
            <span className="font-semibold text-[#e3e8ee]">Basic</span>
            <span className="font-bold text-[#6c8ae4]">Free</span>
          </div>
          <div className="flex justify-between items-center bg-[#232c4b] rounded-lg px-6 py-4">
            <span className="font-semibold text-[#e3e8ee]">Pro</span>
            <span className="font-bold text-[#6c8ae4]">$9.99/mo</span>
          </div>
          <div className="flex justify-between items-center bg-[#232c4b] rounded-lg px-6 py-4">
            <span className="font-semibold text-[#e3e8ee]">Enterprise</span>
            <span className="font-bold text-[#6c8ae4]">Contact Us</span>
          </div>
        </div>
      </section>
    </main>
  );
}
