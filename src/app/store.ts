// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
