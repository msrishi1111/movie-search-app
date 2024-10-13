import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trendingMovies: [],
};

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
    },
});

export const { setTrendingMovies } = trendingSlice.actions;
export default trendingSlice.reducer;
