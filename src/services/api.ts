import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantPageProps, RestaurantsListProps } from '../components/Types'

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/data/db.json' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantsListProps, void>({
            query: () => '/',
        }),
        getRestaurant: builder.query<RestaurantPageProps, void>({
            query: () => `/`,
        }),
    }),
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api

export default api