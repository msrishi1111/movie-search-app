import { useEffect, useState } from 'react';
import './MovieCard.css';
import { IMDB_STRING } from '../../constants';

const MovieCard = ({ movie, onRemoveFavourite }) => {
    const { id, title, overview, release_date, vote_average, poster_path } = movie;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const isFavorited = favorites.some((favMovie) => favMovie.id === id);
        if (isFavorited) {
            setIsFavorite(true);
        }
    }, [id]);

    const handleFavoriteToggle = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
            onRemoveFavourite();
        } else {
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className="movie-card">
            <button className="favorite-button" onClick={handleFavoriteToggle}>
                {isFavorite ? <img className="favourite" src="/favorite.svg" alt="Unfavorite" /> : <img className="favourite" src="/not-favourite.svg" alt="Favorite" />}
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
                    <span className="movie-rating">{vote_average ? `${IMDB_STRING} ${vote_average.toFixed(1)} ⭐` : "NA"}</span>
                </div>
                <h3 className="movie-title">{title}</h3>
                <p className="movie-overview">{overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;
