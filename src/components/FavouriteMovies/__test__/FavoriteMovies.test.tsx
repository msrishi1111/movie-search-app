import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteMovies from "../FavouriteMovies";
import { Movie } from "../../types";
import { FAVOURITE_MOVIES_TEXT, NO_FAVOURITE_MOVIES_TEXT } from "../../../constants";

const setLocalStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

describe("FavoriteMovies component", () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test("renders 'No favorite movies' message when no favorites are stored", () => {
        render(<FavoriteMovies />);

        expect(screen.getByText(NO_FAVOURITE_MOVIES_TEXT)).toBeInTheDocument();
    });

    test("renders favorite movies when stored in localStorage", () => {
        const favoriteMovies: Movie[] = [
            {
                id: 1,
                title: "Inception",
                overview: "A mind-bending thriller",
                release_date: "2010-07-16",
                vote_average: 8.8,
                poster_path: "/poster-inception.jpg",
                adult: false
            },
            {
                id: 2,
                title: "The Matrix",
                overview: "A hacker discovers reality is not what it seems",
                release_date: "1999-03-31",
                vote_average: 8.7,
                poster_path: "/poster-matrix.jpg",
                adult: false
            },
        ];

        setLocalStorage("favorites", favoriteMovies);
        render(<FavoriteMovies />);

        expect(screen.getByText(FAVOURITE_MOVIES_TEXT)).toBeInTheDocument();
        expect(screen.getByAltText("Inception poster")).toBeInTheDocument();
        expect(screen.getByAltText("The Matrix poster")).toBeInTheDocument();
    });

    test("removes a movie from the favorites when 'Unfavorite' is clicked", () => {
        const favoriteMovies: Movie[] = [
            {
                id: 1,
                title: "Inception",
                overview: "A mind-bending thriller",
                release_date: "2010-07-16",
                vote_average: 8.8,
                poster_path: "/poster-inception.jpg",
                adult: false
            },
        ];

        setLocalStorage("favorites", favoriteMovies);
        render(<FavoriteMovies />);

        expect(screen.getByAltText("Inception poster")).toBeInTheDocument();

        fireEvent.click(screen.getByAltText("Unfavorite"));

        expect(screen.getByText(NO_FAVOURITE_MOVIES_TEXT)).toBeInTheDocument();
    });
});
