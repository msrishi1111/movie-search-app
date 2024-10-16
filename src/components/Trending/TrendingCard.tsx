import React from 'react';
import './TrendingCard.css';
import { TrendingCardProps } from '../types';
import { ADULT_STRING, IMDB_STRING, SUITABLE_FOR_ALL_STRING } from '../../constants';

const TrendingCard: React.FC<TrendingCardProps> = ({ movie, index, key }) => {
    const { title, release_date, vote_average, poster_path, adult, rank } = movie;

    return (
        <div className="trending-card" key={key}>
            <img
                className="trending-poster"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${title} poster`}
            />
            <div className="rank-badge">#{rank ?? index + 1}</div>
            <div className="trending-info">
                <h3 className="trending-title">{title}</h3>
                <span className="rating">{IMDB_STRING} {vote_average.toFixed(1)} ⭐</span>
                <p className="release-date">Release: {new Date(release_date).toLocaleDateString()}</p>
                <p className="adult">{adult ? ADULT_STRING : SUITABLE_FOR_ALL_STRING}</p>
            </div>
        </div>
    );
};

export default TrendingCard;
