// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CartItemsType } from '../../types/CartItemsType'
import { StoreUrl } from '../../Constants/Urls'


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: StoreUrl }),
  endpoints: (builder) => ({
    getData: builder.query<CartItemsType[] , void>({
      query: () => `/products`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery } = productApi