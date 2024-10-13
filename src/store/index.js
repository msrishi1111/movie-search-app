import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import trendingReducer from './trendingSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    trending: trendingReducer
  },
});

export default store;
