import React, { useState, useEffect } from 'react';
import { Event, type EventJSON } from '../models/Event';

const Carousel: React.FC = () => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        // files in the public folder are served relative to the root URL

        fetch("/events.json")
            .then((res) => res.json())
            .then((data: any[]) => {
                const mapped = data.map((item) => ({
                    ...item,
                    selling_date: new Date(item.selling_date), // Convert to JS Date Object
                    start_hour: new Date(item.start_hour)
                }));
                setEvents(mapped);
            })
            .catch((err) => console.error("Error loading JSON: ", err));
    }, []);

    
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    const handlePrev = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        );
    };

    const handleNext = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex);
    };

    if (!events.length) return null;

    return (
        <main className="relative w-full max-w-4x1 mx-auto h-[400px] overflow-hidden group rounded-x1">
            {/* Slides Container */}
            <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {events.map((item) => (
                    <div key ={item.id} className="w-full h-full flex-shrink-0 relative">
                        {/* <img 
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        /> */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                            <h3 className="text-x1 font-bold">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* Left Navigation Arrow */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition"
                aria-label="Previous slide"
            >
                &#10094;
            </button>
            {/* Left Navigation Arrow */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition"
                aria-label="Next slide"
            >
                &#10095;
            </button>
            {/* Left Navigation Arrow */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
                {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentIndex === index ? 'bg-white scale-125' : 'bg-white/'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </main>
    )

}
export default Carousel; 