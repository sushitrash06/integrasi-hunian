import Image from "next/image";
import React from "react";

const images = [
  { src: "image2.png", width: 300, height: 200 },
  { src: "image2.png", width: 400, height: 300 },
  { src: "image3.png", width: 200, height: 300 },
  { src: "image4.png", width: 350, height: 250 },
  { src: "image5.png", width: 250, height: 250 },
  { src: "image2.png", width: 450, height: 300 },
  { src: "image4.png", width: 300, height: 400 },
  { src: "image5.png", width: 400, height: 250 },
  { src: "image2.png", width: 200, height: 200 },
  { src: "image2.png", width: 400, height: 500 },
];

const Gallery = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md"
          style={{
            flex: `${image.width / image.height}`,
            height: "200px", // Set base height for uniformity
          }}
        >
          <Image
            src={image.src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
