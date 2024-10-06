"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import images from the same folder
import stammeringImage from './Online stammering therapy.jpg'; // Adjust the path if needed
import stammatherapy from './stammatherapy.jpg';
import stammatherapyimage from './stuttering therapy.jpg';
import speechTherapist from './speech therapist.jpg'

// Define your slides
const slides = [
  {
    imageUrl: stammeringImage,
    alt: 'Stammering Therapy Ocean View',
    caption: '',
  },
  {
    imageUrl: stammatherapy,
    alt: 'Speech Therapy Session',
    caption: '',
  },
  {
    imageUrl: stammatherapyimage,
    alt: 'Speech Therapy Coastal Scene',
    caption: '',
  },
  {
    imageUrl: speechTherapist,
    alt: 'Effective Stammering Therapy',
    caption: '',
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Function to change slides
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Set a timeout for slide change
    const timeout = setTimeout(changeSlide, 8000); // 8000 milliseconds = 8 seconds

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [currentSlide]); // Re-run effect when currentSlide changes

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gray-100 text-black overflow-hidden py-5">
      <div className="relative w-full max-w-7xl h-96 mx-auto">
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">{slides[currentSlide].caption}</h2>
        </div>
        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
