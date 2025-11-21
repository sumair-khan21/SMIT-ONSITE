import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editValue.trim() && editValue !== todo.text) {
      dispatch(editTodo({ id: todo.id, text: editValue.trim() }));
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5">
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
            todo.completed
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent'
              : 'border-white/30 hover:border-purple-500/50'
          }`}
        >
          {todo.completed && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        {/* Todo Text */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-3 py-1 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
            />
          ) : (
            <p
              className={`text-base transition-all duration-300 ${
                todo.completed
                  ? 'line-through text-white/40'
                  : 'text-white'
              }`}
            >
              {todo.text}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {!isEditing && !todo.completed && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 hover:bg-blue-500/20 rounded-lg transition-all duration-300 text-blue-400 hover:text-blue-300"
              title="Edit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300 text-red-400 hover:text-red-300"
            title="Delete"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
