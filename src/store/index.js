import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import trendingReducer from './trendingSlice';
import recentlyReleasedReducer from './recentlyReleasedSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    trending: trendingReducer,
    recentlyReleased: recentlyReleasedReducer,
  },
});

export default store;
