import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductService} from '../services';
import {LoadingState, Product, ProductSortType} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {SortDirection} from '@mui/material';

const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await ProductService.fetchProducts();
  return response;
});

interface ProductsState {
  products: Product[];
  loading: LoadingState;
}

const initialState = {
  products: [],
  loading: 'idle',
} as ProductsState;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortBy: (
      state,
      action: PayloadAction<{
        direction: SortDirection;
        type?: ProductSortType;
      }>,
    ) => {
      if (!state.products) {
        return state.products;
      }

      const {type, direction} = action.payload;
      switch (type) {
        case 'returns':
          state.products = state.products.sort((p1, p2) =>
            direction === 'asc'
              ? p1.gains[0].value - p2.gains[0].value
              : p2.gains[0].value - p1.gains[0].value,
          );
          break;
        default:
        case 'units':
          state.products = state.products.sort((p1, p2) =>
            direction === 'asc' ? p1.units - p2.units : p2.units - p1.units,
          );
          break;
        case 'value':
          state.products = state.products.sort((p1, p2) =>
            direction === 'asc'
              ? p1.flatValue - p2.flatValue
              : p2.flatValue - p1.flatValue,
          );
          break;
        case 'weight':
          state.products = state.products.sort((p1, p2) =>
            direction === 'asc'
              ? p1.percentage - p2.percentage
              : p2.percentage - p1.percentage,
          );
          break;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchProducts.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.loading = 'failed';
    });
  },
});

export const {sortBy} = productsSlice.actions;

export const useFilterProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (direction: SortDirection, type?: ProductSortType) =>
    dispatch(sortBy({direction, type}));
};

export const useProducts = () =>
  useSelector((state: RootState) => state.products);

export const useFetchProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  return () => dispatch(fetchProducts());
};

export default productsSlice.reducer;
