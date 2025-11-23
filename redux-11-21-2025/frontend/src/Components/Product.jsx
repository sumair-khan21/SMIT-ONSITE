import React, { useState } from 'react';
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from '../services/productApi';

const Product = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setProductName('');
    setProductDescription('');
    setEditingId(null);
  };

  const handleAdd = async () => {
    if (!productName.trim() || !productDescription.trim()) return;
    await addProduct({ name: productName, description: productDescription });
    resetForm();
    refetch();
  };

  const handleUpdate = async () => {
    if (!editingId || !productName.trim() || !productDescription.trim()) return;
    await updateProduct({ id: editingId, name: productName, description: productDescription });
    resetForm();
    refetch();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    refetch();
  };

  const startEdit = (product) => {
    setProductName(product.name);
    setProductDescription(product.description);
    setEditingId(product.id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 block py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-6xl mx-auto pt-32 space-y-10">
        <header className="text-center px-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Product Management
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Create, edit, and delete products with a futuristic UI.
          </p>
        </header>

        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition"
            />
            <input
              type="text"
              placeholder="Product description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-end pt-2">
            {editingId ? (
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-lg shadow-md transition-all duration-300"
              >
                Update Product
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-400 hover:to-teal-500 text-white rounded-lg shadow-md transition-all duration-300"
              >
                Add Product
              </button>
            )}
            {editingId && (
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {isLoading && (
          <p className="text-center text-slate-400 mt-4">Loading products…</p>
        )}
        {error && (
          <p className="text-center text-red-400 mt-4">Failed to load products.</p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 break-words">
                  {product.name}
                </h2>
                <p className="text-slate-300 text-sm break-words">
                  {product.description}
                </p>
              </div>
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => startEdit(product)}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
