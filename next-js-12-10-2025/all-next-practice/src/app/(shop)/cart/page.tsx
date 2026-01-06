export default function CartPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a23] to-[#1e2746] px-4 py-12">
      <section className="w-full max-w-2xl flex flex-col items-center bg-[#181f36]/80 rounded-2xl shadow-2xl p-10 mb-8">
        <h1 className="text-3xl font-bold mb-3 text-[#6c8ae4]">Your Cart</h1>
        <p className="text-[#b0b8c9] text-center">Your cart is empty. Add some products to see them here!</p>
      </section>
    </main>
  );
}
