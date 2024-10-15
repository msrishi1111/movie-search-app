import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../MovieCard";
import { IMDB_STRING } from "../../../constants";

const setLocalStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

describe("MovieCard component", () => {
    const movie = {
        id: 1,
        title: "Inception",
        overview: "A mind-bending thriller",
        release_date: "2010-07-16",
        vote_average: 8.8,
        poster_path: "/poster-inception.jpg",
        adult: false
    };

    beforeEach(() => {
        window.localStorage.clear();
    });

    test("renders movie details correctly", () => {
        render(<MovieCard movie={movie} onRemoveFavourite={jest.fn()} />);

        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByText("A mind-bending thriller")).toBeInTheDocument();
        expect(screen.getByText("2010")).toBeInTheDocument();
        expect(screen.getByText(`${IMDB_STRING} 8.8 ⭐`)).toBeInTheDocument();

        expect(screen.getByAltText("Inception poster")).toBeInTheDocument();
    });

    test("handles favorite toggle and updates localStorage", () => {
        const mockRemoveFavourite = jest.fn();

        render(<MovieCard movie={movie} onRemoveFavourite={mockRemoveFavourite} />);

        const favoriteButton = screen.getByAltText("Favorite");
        expect(favoriteButton).toBeInTheDocument();

        fireEvent.click(favoriteButton);

        expect(screen.getByAltText("Unfavorite")).toBeInTheDocument();
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        expect(storedFavorites.length).toBe(1);
        expect(storedFavorites[0].title).toBe("Inception");
        fireEvent.click(screen.getByAltText("Unfavorite"));

        expect(screen.getByAltText("Favorite")).toBeInTheDocument();

        expect(localStorage.getItem("favorites")).toBe("[]");
        expect(mockRemoveFavourite).toHaveBeenCalledTimes(1);
    });

    test("initially sets favorite status based on localStorage", () => {
        setLocalStorage("favorites", [movie]);

        render(<MovieCard movie={movie} onRemoveFavourite={jest.fn()} />);
        expect(screen.getByAltText("Unfavorite")).toBeInTheDocument();
    });
});
