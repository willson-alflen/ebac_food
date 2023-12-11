import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsListProps } from '../components/Types'

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/data/db.json' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantsListProps, void>({
            query: () => '/',
        })
    }),
})

export const { useGetRestaurantsQuery } = api

export default api