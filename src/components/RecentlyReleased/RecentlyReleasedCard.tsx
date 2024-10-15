import './RecentlyReleasedCard.css';

const RecentlyReleasedCard = ({ movie }) => {
    const { title, release_date, vote_average, poster_path, adult } = movie;

    return (
        <div className="recently-released-card">
            <img
                className="recently-released-poster"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${title} poster`}
            />
            <div className="recently-released-info">
                <h3 className="recently-released-title">{title}</h3>
                <span className="recently-released-rating">IMDb: {vote_average.toFixed(1)} ⭐</span>
                <p className="recently-released-release-date">Release: {new Date(release_date).toLocaleDateString()}</p>
                <p className="recently-released-adult">{adult ? "Rated: Adult" : "Rated: Suitable for All"}</p>
            </div>
        </div>
    );
};

export default RecentlyReleasedCard;
