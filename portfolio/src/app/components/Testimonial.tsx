"use client";
import React from "react";
import dynamic from 'next/dynamic';

const TestimonialClient = dynamic(() => import('./TestimonialClient'), { ssr: false });

const Testimonial = () => {
  return <TestimonialClient />;
};

export default Testimonial;
