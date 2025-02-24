/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface Project {
  id: number;
  name: string;
  photo: string[];
}

const SliderGallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/auth/projects`)
      .then((response) => {
        const mappedProjects = response.data.map((project: any) => ({
          id: project.id,
          name: project.nama_project, // Menyesuaikan dengan API
          photo: project.gambar || [],
        }));
        setProjects(mappedProjects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= projects.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 3 : prevIndex - 3
    );
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartPosition(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentPosition = e.clientX;
    const difference = startPosition - currentPosition;

    if (difference > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (difference < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 relative">
      <h2 className="text-3xl font-bold text-maroon-800 mb-6">Projects</h2>
      <div
        className="overflow-hidden rounded-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-1/3 flex-shrink-0 px-2 relative group"
            >
              {/* Image */}
              <Image
                src={project.photo.length > 0 ? project.photo[0] : "/placeholder.png"}
                alt={project.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                <p className="text-white text-lg font-bold">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
      >
        &gt;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(projects.length / 3) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === Math.floor(currentIndex / 3)
                  ? "bg-maroon-100"
                  : "bg-maroon-300 hover:bg-maroon-600"
              }`}
              onClick={() => setCurrentIndex(index * 3)}
            ></button>
          )
        )}
      </div>

      {/* See More Button */}
      <div className="mt-6 text-center">
        <Link
          href="/projects"
          className="inline-block bg-maroon-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-maroon-600"
        >
          See More Projects
        </Link>
      </div>
    </div>
  );
};

export default SliderGallery;
