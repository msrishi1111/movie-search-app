import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS file for styling

const Carousel = ({ items, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start from the first item
    const itemsCount = items.length;

    // Move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < itemsCount - 1 ? prevIndex + 1 : prevIndex // Stop at the last item
        );
    };

    // Move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : prevIndex // Stop at the first item
        );
    };

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsCount]);

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={prevSlide} disabled={currentIndex === 0}>
                &#10094; {/* Left arrow */}
            </button>
            <div className="carousel-wrapper" style={{ transform: `translateX(-${(currentIndex * 100) / itemsCount}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item, index)} {/* Render the item using the provided render function */}
                    </div>
                ))}
            </div>
            <button className="carousel-button right" onClick={nextSlide} disabled={currentIndex === itemsCount - 1}>
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default Carousel;
