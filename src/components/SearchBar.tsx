import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../store/searchSlice';
import { getMoviesBySearch } from '../network/api';
import debounce from 'lodash/debounce';
import './SearchComponent.css';

const SearchComponent = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<string | null>(null);

    const debouncedSearch = useCallback(
        debounce((query) => {
            if (inputRef.current !== query) return;
            getMoviesBySearch(query, 1)
                .then((response) => {
                    dispatch(setSearchResults({ results: response.results, totalResults: response.total_results, page: response.page, totalPages: response.total_pages, query: query }));
                })
                .catch((error) => {
                    console.error('Error fetching movies:', error);
                });
        }, 500),
        [dispatch]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        inputRef.current = e.target.value;
        if (value !== '') {
            debouncedSearch(value);
        }
        else {
            dispatch(setSearchResults({ results: [], totalResults: 0, page: 0, totalPages: 0, query: '' })); // Clear search
        }
    };

    return (
        <div className='search-container'>
            <input
                type="text"
                onChange={handleSearchChange}
                placeholder="Search for movies..."
                className='search-input'
            />
        </div>
    );
};

export default SearchComponent;
