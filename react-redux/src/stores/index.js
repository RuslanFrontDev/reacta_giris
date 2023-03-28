import { configureStore } from '@reduxjs/toolkit'
import cart from './product'
export const store = configureStore({
  reducer: {
   cart
  },
})

