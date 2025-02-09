"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log(API_BASE_URL)

// **Definisikan tipe data berdasarkan response API**
interface Project {
  id: number;
  name: string;
  photo: { 
    formats: { 
      small?: { url: string }; 
    }; 
    url: string;
  }[];
}

const GaleryGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/projects?populate=*`)
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={
                project.photo.length > 0
                  ? `${API_BASE_URL}${project.photo[0].formats.small?.url || project.photo[0].url}`
                  : "/placeholder.png" // Jika tidak ada gambar
              }
              alt={project.name}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center font-semibold px-4">
                {project.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryGrid;
