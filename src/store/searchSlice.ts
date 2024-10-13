import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchResult {
  id: string;
  title: string;
  dsecription: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface SearchState {
  searchResults: SearchResult[];
  totalResults: number;
  page: number;
  totalPages: number;
  query: string;
}

const initialState: SearchState = {
  searchResults: [],
  totalResults: 0,
  page: 1,
  totalPages: 0,
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      const { results, totalResults, page, totalPages, query } = action.payload;
      state.searchResults = results || [];
      state.totalResults = totalResults ?? 0;
      state.page = page ?? 1;
      state.totalPages = totalPages ?? 0;
      state.query = query ?? '';
    },
    setFetchMoreResults: (state, action) => {
      state.searchResults.push(...action.payload);
    },
  },
});

export const { setSearchResults, setFetchMoreResults } = searchSlice.actions;
export default searchSlice.reducer;
