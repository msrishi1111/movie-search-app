import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ items, renderItem , visibleCard, cardWidth }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsCount = items.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < itemsCount - 1 - visibleCard ? prevIndex + 1 : prevIndex
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsCount]);

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={prevSlide} disabled={currentIndex === 0}>
                &#10094;
            </button>
            <div className="carousel-wrapper" style={{ transform: `translateX(-${(currentIndex * cardWidth)}px)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
            <button className="carousel-button right" onClick={nextSlide} disabled={currentIndex === itemsCount - 1- visibleCard}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
