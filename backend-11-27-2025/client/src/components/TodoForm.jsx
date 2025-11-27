import React from 'react';
import { motion } from 'framer-motion';

const TodoForm = ({ title, setTitle, description, setDescription, addTodo, updateTodo, editId }) => {
  return (
    <div className="p-8 border-b border-gray-100 bg-gray-50/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-4 md:space-y-0 md:flex md:gap-4">
          <motion.input
            whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)' }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full md:w-1/2 px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white shadow-sm text-gray-700 placeholder-gray-400 text-lg"
          />
          <motion.input
            whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)' }}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add details (optional)"
            className="w-full md:w-1/2 px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white shadow-sm text-gray-700 placeholder-gray-400 text-lg"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={editId ? updateTodo : addTodo}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 cursor-pointer text-lg"
        >
          {editId ? (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              Update
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              Add
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default TodoForm;
