import React, { useEffect, useState } from 'react';
import './MovieCard.css'; // Ensure this CSS file exists

const MovieCard = ({ movie }) => {
    const { id, title, overview, release_date, vote_average, poster_path } = movie;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(id)) {
            setIsFavorite(true);
        }
    }, [id]);

    const handleFavoriteToggle = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            // Remove from favorites
            const updatedFavorites = favorites.filter(favId => favId !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Add to favorites
            favorites.push(id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className="movie-card">
            <button className="favorite-button" onClick={handleFavoriteToggle}>
                {isFavorite ? <img className="favourite" src="/favorite.svg" /> : <img className="favourite" src="/not-favourite.svg" />}
            </button>
            <div className="movie-poster-wrapper">
                <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`${title} poster`}
                />
            </div>
            <div className="movie-info">
                <div className="movie-details">
                    <span className="movie-release-date">{new Date(release_date).getFullYear()}</span>
                    <span className="movie-rating">{vote_average ? `IMDb: ${vote_average.toFixed(1)} ⭐` : "NA"}</span>
                </div>
                <h3 className="movie-title">{title}</h3>
                <p className="movie-overview">{overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;
