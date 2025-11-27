import React from 'react';
import { motion } from 'framer-motion';

const TodoHeader = () => (
  <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 px-8 py-12 text-white relative overflow-hidden">
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-sm">My Tasks</h1>
      <p className="mt-3 text-indigo-100 text-xl font-medium opacity-90">
        Manage your day efficiently.
      </p>
    </motion.div>
    {/* Decorative animated circles */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-900 opacity-20 blur-3xl"
    />
  </div>
);

export default TodoHeader;
