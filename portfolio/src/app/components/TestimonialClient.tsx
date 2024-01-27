import React, { useState, useEffect, useRef } from "react";
import styles from "./Testimonial.module.css";

const testimonialsData = [
  {
    imageSrc: "banner.png",
    alt: "Testimonial Image Description 1",
    feedback:
      "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
    author: "Managing Director 1",
    name: "- John Doe 1",
  },
  {
    imageSrc: "client1.png",
    alt: "Testimonial Image Description 2",
    feedback:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
    author: "Managing Director 2",
    name: "- John Doe 2",
  },
  {
    imageSrc: "client2.png",
    alt: "Testimonial Image Description 3",
    feedback:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at posuere velit, ut scelerisque lorem.",
    author: "Managing Director 3",
    name: "- John Doe 3",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 150000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollToRef = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    scrollToRef();
  }, [activeIndex]);

  return (
    <div className="bg-gray-100 p-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h6 className="text-2xl font-bold text-gray-800 mb-4">
            RESULT OF MY WORK
          </h6>
          <h2 className="text-2xl font-bold mb-4 pb-8">
            <span className={styles.testimonialHeading}>Testimonials</span>
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center items-center">
            <div
              key={activeIndex}
              className="w-full md:w-3/4 px-4 mb-4"
            >
              <div className="testimonial-content flex justify-end" ref={scrollRef}>
                <img
                  className="h-40 w-40 rounded-full testimonial-image mr-4 border-2 border-purple-600 mt-4"
                  src={testimonialsData[activeIndex].imageSrc}
                  alt={testimonialsData[activeIndex].alt}
                />
                <div className="bg-white p-6 rounded-lg shadow client-feedback overflow-auto border-2 border-purple-600">
                  <p className="text-gray-800 mb-4">
                    {testimonialsData[activeIndex].feedback}
                  </p>
                  <h6 className="text-gray-800 font-semibold">
                    {testimonialsData[activeIndex].author}
                  </h6>
                  <p className="text-gray-600">
                    {testimonialsData[activeIndex].name}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 flex items-center">
              <button
                onClick={handlePrevious}
                className="h-full px-4 text-gray-800 hover:text-fuchsia-700"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="h-full px-4 text-gray-800 hover:text-fuchsia-700"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
