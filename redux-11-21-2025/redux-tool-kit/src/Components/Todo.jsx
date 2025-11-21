import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearCompleted, selectTodosStats } from '../store/todoSlice';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);
  const stats = useSelector(selectTodosStats);

  const filterButtons = [
    { value: 'all', label: 'All', icon: '📋' },
    { value: 'active', label: 'Active', icon: '⚡' },
    { value: 'completed', label: 'Completed', icon: '✓' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            ✨ Todo App
          </h1>
          <p className="text-white/70 text-lg">Organize your tasks with style</p>
        </div>

        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <p className="text-purple-300 text-sm font-medium mb-1">Total</p>
              <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <p className="text-blue-300 text-sm font-medium mb-1">Active</p>
              <p className="text-3xl font-bold text-white">{stats.active}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <p className="text-green-300 text-sm font-medium mb-1">Done</p>
              <p className="text-3xl font-bold text-white">{stats.completed}</p>
            </div>
          </div>

          {/* Input */}
          <TodoInput />

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => dispatch(setFilter(btn.value))}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  filter === btn.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span className="mr-2">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
            {stats.completed > 0 && (
              <button
                onClick={() => dispatch(clearCompleted())}
                className="ml-auto px-6 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-xl font-medium transition-all duration-300 border border-red-500/30 hover:border-red-500/50"
              >
                🗑️ Clear Completed
              </button>
            )}
          </div>

          {/* Todo List */}
          <TodoList />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Made with 💜 by Sumair • Press Enter to add • Double-click to edit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
