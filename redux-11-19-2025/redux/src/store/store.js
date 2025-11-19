import { configureStore } from '@reduxjs/toolkit'
// import todoSlice from '../Features/todoSlice'
import todoSlice from '../features/TodoSlice'
import { productApi } from '../services/products'

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})
