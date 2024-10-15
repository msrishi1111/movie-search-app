import { render, screen } from "@testing-library/react";
import RecentlyReleasedCard from "../RecentlyReleasedCard";

describe("RecentlyReleasedCard component", () => {
    const mockMovie = {
        title: "The Matrix Resurrections",
        release_date: "2021-12-22",
        vote_average: 7.5,
        poster_path: "/poster.jpg",
        adult: false,
    };

    test("renders movie information correctly", () => {
        render(<RecentlyReleasedCard movie={mockMovie} />);

        const titleElement = screen.getByText(mockMovie.title);
        expect(titleElement).toBeInTheDocument();

        const posterElement = screen.getByAltText(`${mockMovie.title} poster`);
        expect(posterElement).toBeInTheDocument();
        expect(posterElement).toHaveAttribute("src", `https://image.tmdb.org/t/p/w500${mockMovie.poster_path}`);

        const ratingElement = screen.getByText(`IMDb: ${mockMovie.vote_average.toFixed(1)} ⭐`);
        expect(ratingElement).toBeInTheDocument();

        const releaseDateElement = screen.getByText(`Release: ${new Date(mockMovie.release_date).toLocaleDateString()}`);
        expect(releaseDateElement).toBeInTheDocument();

        const adultRatingElement = screen.getByText("Rated: Suitable for All");
        expect(adultRatingElement).toBeInTheDocument();
    });

    test("renders adult rating correctly for adult content", () => {
        const adultMovie = {
            ...mockMovie,
            adult: true,
        };
        render(<RecentlyReleasedCard movie={adultMovie} />);

        const adultRatingElement = screen.getByText("Rated: Adult");
        expect(adultRatingElement).toBeInTheDocument();
    });
});
