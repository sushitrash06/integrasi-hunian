/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Tipe data project
interface Project {
    id: number;
    nama_project: string;
    deskripsi: string;
    gambar: string[]; // Array URL gambar
}

const ProjectDetail = () => {
    const params = useParams();
    const id = Array.isArray(params && params.id) ? params && params.id[0] : params && params.id;
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        axios
            .get(`${API_BASE_URL}/api/auth/projects/${id}`)
            .then((res) => {
                setProject(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Project tidak ditemukan atau terjadi kesalahan");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

    return (
        <div className="container mx-auto px-6 lg:px-16 py-10">
            <h1 className="text-3xl font-bold">{project?.nama_project}</h1>
            <p className="mt-4 text-gray-700">{project?.deskripsi}</p>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {project?.gambar.length && project?.gambar.length > 0 ? (
                    project.gambar.map((img, index) => (
                        <div key={index} className="relative w-full h-64">
                            <Image
                                src={img}
                                alt={`Project Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Tidak ada gambar</p>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
