import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {useGetWeatherDataQuery, weatherApi} from './API/weatherApi'  
import { searchSlice } from './Slices/searchSlice'

export const store2 = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

setupListeners(store2.dispatch)