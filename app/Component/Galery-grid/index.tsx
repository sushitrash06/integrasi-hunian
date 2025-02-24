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
  photo: string[]; // Array URL gambar
}

const GaleryGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/auth/projects`)
      .then((response) => {
        const mappedProjects = response.data.map((project: any) => ({
          id: project.id,
          name: project.nama_project,
          photo: project.gambar || [],
        }));
        setProjects(mappedProjects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} passHref>
            <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                src={project.photo.length > 0 ? project.photo[0] : "/placeholder.png"}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GaleryGrid;
