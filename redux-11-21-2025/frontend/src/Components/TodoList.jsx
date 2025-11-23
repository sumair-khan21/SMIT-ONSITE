import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-full mb-4">
          <svg
            className="w-10 h-10 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-white/50 text-lg">No todos yet. Add one to get started! ✨</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
