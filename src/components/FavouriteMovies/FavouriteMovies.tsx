import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./FavouriteMovies.css";

const FavoriteMovies: React.FC = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);

    const fetchFavoriteMovies = () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    };

    useEffect(() => {
        fetchFavoriteMovies();
    }, []);

    const handleRemoveFavorite = () => {
        const updatedFavorites = localStorage.getItem("favorites");
        updatedFavorites && setFavoriteMovies(JSON.parse(updatedFavorites));
    };

    return (
        <div className="favoriteMoviesContainer">
            <h2 className="favoriteMoviesText">Your Favorite Movies</h2>
            {favoriteMovies.length > 0 ? (
                <div className="favoriteMoviesList">
                    {favoriteMovies.map((movie: any) => (
                        <MovieCard
                            movie={movie}
                            key={movie.id}
                            onRemoveFavourite={handleRemoveFavorite}
                        />
                    ))}
                </div>
            ) : (
                <p className="favoriteMoviesText">You have no favorite movies saved.</p>
            )}
        </div>
    );
};

export default FavoriteMovies;
