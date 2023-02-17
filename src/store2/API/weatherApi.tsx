import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/weather' }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (name) => `?q=${name}&appid=6dd9a3163fda53124d90e00eea8670af`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetWeatherDataQuery } = weatherApi