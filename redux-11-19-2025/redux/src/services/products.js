import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
            providesTags: ['Products'],
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ['Products'],
        }),
    }),
})

export const { useGetProductsQuery, useAddProductMutation } = productApi;
// export default productApi;