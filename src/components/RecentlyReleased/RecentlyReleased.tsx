import React, { useEffect } from "react";
import "./RecentlyReleased.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyReleasedMovies } from "../../network/api";
import { setRecentlyReleasedMovies } from "../../store/recentlyReleasedSlice";
import Carousel from "../Carousel/Carousel";
import RecentlyReleasedCard from "./RecentlyReleasedCard";
import { RECENTLY_RELEASED_MOVIES_TITLE } from "../../constants";

export const RecentlyReleased: React.FC = () => {
    const dispatch = useDispatch();
    const recentlyReleasedMovies = useSelector((state: any) => state.recentlyReleased.recentlyReleasedMovies);
    const cardWidth = window.innerWidth < 600 ? 188 : 248;
    useEffect(() => {
        const fetchRecentlyReleasedMovies = async () => {
            const response = await getRecentlyReleasedMovies();
            dispatch(setRecentlyReleasedMovies(response.results));
        };

        fetchRecentlyReleasedMovies();
    }, [dispatch]);

    return (
        <div className="recently-released-container">
            <div className="heading">
                <img className="recentlyReleasedIcon" src="/recentMovies.svg" alt="Recently Released Movies" />
                <h2 className="recently-released-heading">{RECENTLY_RELEASED_MOVIES_TITLE}</h2>
            </div>
            {recentlyReleasedMovies.length > 0 && (
                <Carousel
                    items={recentlyReleasedMovies}
                    visibleCard={7}
                    cardWidth={cardWidth}
                    renderItem={(movie, index) => <RecentlyReleasedCard key={movie.id} movie={movie} index={index} />}
                />
            )}
        </div>
    );
};

export default RecentlyReleased;
