// src/features/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Product } from '../types';

// Simulate an async fetch from an "API" (our local products.json)
export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await fetch('/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: Product[] = await response.json();
  // In a real app, you'd parse/transform if needed
  return data;
});

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default productSlice.reducer;

// Selector to get all products
export const selectAllProducts = (state: RootState) => state.product.products;
// Selector to check loading state
export const selectLoading = (state: RootState) => state.product.loading;
// Selector to check error state
export const selectError = (state: RootState) => state.product.error;
