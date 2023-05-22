import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-test.innoloft.com',
  }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: (appId = 2) => `/configuration/${appId}/`,
    }),
    getTrl: builder.query({
      query: () => `/trl/`,
    }),

    getProduct: builder.query({
      query: (id) => `/product/${id}/`,
      providesTags: ['Product'],
    }),

    editProduct: builder.mutation({
      query: (product) => ({
        url: `/product/${product.id}/`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetConfigurationQuery,
  useGetTrlQuery,
  useGetProductQuery,
  useEditProductMutation,
} = apiSlice;
