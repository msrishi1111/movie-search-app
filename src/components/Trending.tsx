import React, { useEffect } from "react";
import "./Trending.css";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../network/api";
import { setTrendingMovies } from "../store/trendingSlice";
import Carousel from "./Carousel";
import TrendingCard from "./TrendingCard";

export const Trending: React.FC = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector((state: any) => state.trending.trendingMovies.results || []);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const response = await getTrendingMovies();
            dispatch(setTrendingMovies(response));
        };

        fetchTrendingMovies();
    }, [dispatch]);

    return (
        <div className="trending-container">
            <div className="heading">
                <img className="trendingIcon" src="/trending.svg" alt="Trending Movies" />
                <h2>Trending Movies</h2>
            </div>
            {trendingMovies.length > 0 && (
                <Carousel
                    items={trendingMovies}
                    renderItem={(movie, index) => <TrendingCard key={movie.id} movie={movie} index={index} />}
                />
            )}
        </div>
    );
};

export default Trending;
