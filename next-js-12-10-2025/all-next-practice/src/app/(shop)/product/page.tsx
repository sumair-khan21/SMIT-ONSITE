export default function ProductsPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#1e2746] to-[#0a0a23] px-4 py-12">
      <section className="w-full max-w-4xl flex flex-col items-center bg-[#232c4b]/80 rounded-2xl shadow-2xl p-10 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-[#6c8ae4]">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-[#181f36] rounded-xl p-6 text-center shadow-lg border border-[#232c4b]">
            <h3 className="text-lg font-semibold text-[#e3e8ee] mb-2">Product 1</h3>
            <p className="text-[#b0b8c9]">Rs. 1000</p>
          </div>
          <div className="bg-[#181f36] rounded-xl p-6 text-center shadow-lg border border-[#232c4b]">
            <h3 className="text-lg font-semibold text-[#e3e8ee] mb-2">Product 2</h3>
            <p className="text-[#b0b8c9]">Rs. 2000</p>
          </div>
          <div className="bg-[#181f36] rounded-xl p-6 text-center shadow-lg border border-[#232c4b]">
            <h3 className="text-lg font-semibold text-[#e3e8ee] mb-2">Product 3</h3>
            <p className="text-[#b0b8c9]">Rs. 3000</p>
          </div>
        </div>
      </section>
    </main>
  );
}