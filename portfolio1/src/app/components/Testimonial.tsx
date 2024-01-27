
"use client";
import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import TestimonialItems from "./TestimonialItems";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
            author: "Managing Director 1",
            image: "client1.png"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
            author: "Managing Director 2",
            image: "client2.png"
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
            author: "Managing Director 3",
            image: "banner.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="bg-purple-200 py-24">
            <div className="container mx-auto">
                <header className="text-center mb-8">
                    <h6 className="text-2xl font-bold text-gray-800 mb-4">CLIENT REVIEWS OF MY WORK</h6>
                    <h2 className="text-2xl font-bold mb-4 pb-8"><span className={styles.testimonialHeading}>Testimonials</span></h2>
                </header>
                <div className="flex justify-center items-center">
                    <div className="w-3/4 bg-white shadow-lg overflow-hidden rounded-lg  p-8">
                        <TestimonialItems testimonials={[testimonials[currentIndex]]} />
                    </div>
                    <div className="flex items-center justify-center">
                        <TestimonialButton ariaLabel="Previous testimonial" path="M10 19l-7-7m0 0l7-7m-7 7h18" onClick={handlePrevious} />
                        <TestimonialButton ariaLabel="Next testimonial" path="M14 5l7 7m0 0l-7 7m7-7H3" onClick={handleNext} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialButton: React.FC<{ ariaLabel: string; path: string; onClick: () => void }> = ({ ariaLabel, path, onClick }) => {
    return (
        <button className="h-full px-4 text-gray-800 hover:text-fuchsia-700" aria-label={ariaLabel} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
            </svg>
        </button>
    );
};

export default Testimonial;
