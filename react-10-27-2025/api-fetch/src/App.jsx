import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Sidebar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
