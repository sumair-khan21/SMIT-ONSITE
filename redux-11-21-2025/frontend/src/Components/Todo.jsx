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
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        {/* App Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Todo List
          </h1>
          <p className="text-slate-400">Stay organized and productive</p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Stats Section */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
            <div className="p-4 text-center border-r border-white/10">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Total</div>
            </div>
            <div className="p-4 text-center border-r border-white/10">
              <div className="text-2xl font-bold text-blue-400">{stats.active}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Active</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Done</div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Input Section */}
            <div className="mb-8">
              <TodoInput />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex gap-2 bg-black/20 p-1 rounded-lg">
                {filterButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => dispatch(setFilter(btn.value))}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      filter === btn.value
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
              
              {stats.completed > 0 && (
                <button
                  onClick={() => dispatch(clearCompleted())}
                  className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                >
                  <span>Clear Completed</span>
                </button>
              )}
            </div>

            {/* List Section */}
            <TodoList />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>Press <span className="text-slate-400 font-medium">Enter</span> to add a task</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
