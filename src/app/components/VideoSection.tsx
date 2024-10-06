"use client";

import { useState } from 'react';


const videos = [
  {
    src: '/videos/before.mp4',
    title: 'Before Therapy',
  },
  {
    src: '/videos/after.mp4',
    title: 'After Therapy',
  },
  {
    src: '/videos/before2.mp4',
    title: 'Before Therapy',
  },
  {
    src: '/videos/after2.mp4',
    title: 'After Therapy',
  },
 
];

export default function VideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (videos.length / 2)); // Show two videos at a time
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (videos.length / 2)) % (videos.length / 2)); // Show two videos at a time
  };
  
  return (
    <section className="relative bg-sky-100 pt-8 pb-4">  {/* Reduced the top padding (pt-8) and bottom padding (pb-4) */}
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4 text-center">Experience Our Therapy Results</h2>
    <p className="text-lg mb-0 text-center">
      With over 26 years of experience, our online stammering therapy offers a unique and effective approach to overcoming speech challenges. Our dedicated language and speech therapists work with you to provide personalized sessions, accessible from anywhere. Witness the transformative results of our therapy through these before-and-after videos. Whether you're looking for a flexible solution to improve your speech or seeking expert guidance, our services are designed to meet your needs and help you communicate more confidently.
    </p>
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {videos.slice(0, videos.length / 2).map((_, index) => (
          <div key={index} className="w-full flex-shrink-0 p-2">
            <div className="flex justify-between">
              {videos.slice(index * 2, index * 2 + 2).map((video, videoIndex) => (
                <div key={videoIndex} className="w-1/2 p-2">
                  <h3 className="text-center font-semibold mb-2">{video.title}</h3>
                  <video
                    src={video.src}
                    controls
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
  </div>
</section>

  );
}
