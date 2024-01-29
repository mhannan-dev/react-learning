import React from "react";
import "./TestimonialContent.css";
import "animate.css"; // Import animate.css

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: string;
}

interface TestimonialItemsProps {
  testimonials: Testimonial[];
}

const TestimonialItems: React.FC<TestimonialItemsProps> = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div className="px-4 py-2 flex animate__animated animate__fadeInLeft" key={testimonial.id}>
          <div className="w-3/4">
            <p className="text-gray-800 mt-6 mb-6 text-spacing">
              {testimonial.text}
            </p>
            <div className="utils">
              <h6 className="text-gray-800 font-semibold text-spacing">
                {testimonial.author}
              </h6>
              <p className="text-pink-700 font-extrabold text-spacing"> -John Doe</p>
            </div>
          </div>
          <div className="w-1/4 flex justify-end">
            <img
              src={testimonial.image}
              alt="Client Image"
              className="testimonial-image"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialItems;
