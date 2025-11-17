import { configureStore } from '@reduxjs/toolkit'
// import todoSlice from '../Features/todoSlice'
import todoSlice from '../features/TodoSlice'
import authSlice from '../features/authSlice'
export const store = configureStore({ reducer: {

    todo: todoSlice,
    auth: authSlice
} })