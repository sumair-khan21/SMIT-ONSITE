import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
  const { cartItems, toggleSidebar } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">🛍️ FakeStore</h1>

      <div className="relative cursor-pointer" onClick={toggleSidebar}>
        <ShoppingCart size={28} className="text-indigo-600" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
