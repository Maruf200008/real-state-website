import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import apiSlice from '../api/apiSlice'
import houseReducer from '../feature/housesSlice'
export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [apiSlice.reducerPath]: apiSlice.reducer,
      house : houseReducer
    },
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })

  setupListeners(store.dispatch)

