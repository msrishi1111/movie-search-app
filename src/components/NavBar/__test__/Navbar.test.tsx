import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar component", () => {
    const renderWithRouter = (component: React.ReactElement) => {
        return render(<BrowserRouter>{component}</BrowserRouter>);
    };

    test("renders navbar links correctly", () => {
        renderWithRouter(<Navbar />);

        const logoLink = screen.getByText("Moviestar");
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");


        const homeLink = screen.getByText("Home");
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute("href", "/");


        const favouritesLink = screen.getByText("Favourites");
        expect(favouritesLink).toBeInTheDocument();
        expect(favouritesLink).toHaveAttribute("href", "/favourite");
    });
});
