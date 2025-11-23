import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import productApi from '../services/productApi';

export const store = configureStore({
    reducer: {
        // todos: todoReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    // middleware: (get) => get().concat(productApi.middleware)
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),

});
