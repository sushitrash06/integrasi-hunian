import Image from "next/image";
import React, { useState } from "react";

const images = [
  { id: 1, src: "image2.png" },
  { id: 2, src: "image2.png" },
  { id: 3, src: "image3.png" },
  { id: 4, src: "image4.png" },
  { id: 5, src: "image5.png" },
];

const SliderGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-maroon-100 p-4 rounded-lg shadow-lg">
      {/* Slider */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="w-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            >
              <Image
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-maroon-700 text-white p-2 rounded-full shadow-md hover:bg-maroon-600"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-maroon-700 text-white p-2 rounded-full shadow-md hover:bg-maroon-600"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex
                ? "bg-maroon-700"
                : "bg-maroon-100 hover:bg-maroon-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderGallery;
