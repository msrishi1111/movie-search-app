// recentlyReleasedSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecentlyReleasedState {
    recentlyReleasedMovies: any;
}

const initialState: RecentlyReleasedState = {
    recentlyReleasedMovies: [],
};

const recentlyReleasedSlice = createSlice({
    name: 'recentlyReleased',
    initialState,
    reducers: {
        setRecentlyReleasedMovies(state, action: PayloadAction<any>) {
            state.recentlyReleasedMovies = action.payload;
        },
    },
});

export const { setRecentlyReleasedMovies } = recentlyReleasedSlice.actions;

export default recentlyReleasedSlice.reducer;
