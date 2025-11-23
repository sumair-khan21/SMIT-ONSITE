import { createSlice, createSelector } from '@reduxjs/toolkit';

// Load todos from localStorage
const loadTodosFromLocalStorage = () => {
    try {
        const serializedTodos = localStorage.getItem('todos');
        if (serializedTodos === null) {
            return [];
        }
        return JSON.parse(serializedTodos);
    } catch (err) {
        console.error('Error loading todos from localStorage:', err);
        return [];
    }
};

// Save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
    try {
        const serializedTodos = JSON.stringify(todos);
        localStorage.setItem('todos', serializedTodos);
    } catch (err) {
        console.error('Error saving todos to localStorage:', err);
    }
};

const initialState = {
    todos: loadTodosFromLocalStorage(),
    filter: 'all', // all, active, completed
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            state.todos.push(newTodo);
            saveTodosToLocalStorage(state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveTodosToLocalStorage(state.todos);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                saveTodosToLocalStorage(state.todos);
            }
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
                saveTodosToLocalStorage(state.todos);
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.completed);
            saveTodosToLocalStorage(state.todos);
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter, clearCompleted } = todoSlice.actions;

// Memoized Selectors using createSelector for better performance

const selectTodos = (state) => state.todos.todos;
const selectFilter = (state) => state.todos.filter;

export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }
);

export const selectTodosStats = createSelector(
    [selectTodos],
    (todos) => ({
        total: todos.length,
        active: todos.filter((todo) => !todo.completed).length,
        completed: todos.filter((todo) => todo.completed).length,
    })
);

export default todoSlice.reducer;
