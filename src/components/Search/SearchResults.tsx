import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchResults.css";
import { setFetchMoreResults } from "../../store/searchSlice";
import { getMoviesBySearch } from "../../network/api";

const SearchResults: React.FC = () => {
    const dispatch = useDispatch();
    const { searchResults, query, totalResults } = useSelector((state: any) => state.search);
    const [page, setPage] = useState(1);
    const loader = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);

    const loadMoreResults = async () => {
        if (searchResults.length < totalResults) {
            setLoading(true);
            try {
                const response = await getMoviesBySearch(query, page + 1);
                dispatch(setFetchMoreResults(response.results));
                setPage((prevPage) => prevPage + 1);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreResults();
                }
            },
            {
                root: null,
                rootMargin: "20px",
                threshold: 1.0,
            }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [searchResults.length, totalResults]);

    return (
        <div className="searchResultContainer">
            {searchResults.length > 0 && <h2 className="searchResultText">{`Results for "${query}"`}</h2>}
            <div className="searchResults">
                {searchResults.map((movie: any) => (
                    <MovieCard movie={movie} key={movie.id} onRemoveFavourite={() => { }} />
                ))}
            </div>
            <div ref={loader} className="loading-indicator">
                {loading && (
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
