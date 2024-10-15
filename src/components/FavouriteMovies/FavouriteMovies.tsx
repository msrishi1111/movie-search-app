import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./FavouriteMovies.css";
import { Movie } from '../types';
import { FAVOURITE_MOVIES_TEXT, NO_FAVOURITE_MOVIES_TEXT } from "../../constants";

const FavoriteMovies: React.FC = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    const fetchFavoriteMovies = () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites) as Movie[]);
        }
    };

    useEffect(() => {
        fetchFavoriteMovies();
    }, []);

    const handleRemoveFavorite = () => {
        fetchFavoriteMovies();
    };

    return (
        <div className="favoriteMoviesContainer">
            <h2 className="favoriteMoviesText">{FAVOURITE_MOVIES_TEXT}</h2>
            {favoriteMovies.length > 0 ? (
                <div className="favoriteMoviesList">
                    {favoriteMovies.map(({ id, ...movieProps }) => (
                        <MovieCard
                            key={id}
                            movie={{ id, ...movieProps }}
                            onRemoveFavourite={handleRemoveFavorite}
                        />
                    ))}
                </div>
            ) : (
                <p className="favoriteMoviesText">{NO_FAVOURITE_MOVIES_TEXT}</p>
            )}
        </div>
    );
};

export default FavoriteMovies;
