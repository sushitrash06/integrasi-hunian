import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../Assets/working-blueprint.jpg";
import AllPackage from "@/app/all-package/page";

const LayananUtama: React.FC = () => {
  const layananLainnya = [
    "Borongan Pembangunan Rumah",
    "Borongan Pembangunan Ruko",
    "Borongan Pembangunan Kantor",
    "Borongan Pembangunan Gudang",
    "Borongan Pembangunan Kolam Renang",
    "Borongan Pembangunan Kost",
    "Borongan Pembangunan Carport",
  ];

  return (
    <div className="p-5">
      <div className="relative h-screen bg-gray-950">
        <div className="absolute inset-0">
          <Image
            src={Image1}
            alt="Latar Belakang"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 text-white">
          <h1 className="text-4xl text-center text-white md:text-6xl font-bold">
            Jasa Borongan Bangunan
          </h1>
        </div>
      </div>

      <div className="mt-10 px-8 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Apakah Anda mengalami kendala berikut ini?
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Ingin renovasi rumah tapi sulit menemukan kontraktor terpercaya</li>
          <li>Takut biaya renovasi terlalu tinggi</li>
          <li>Khawatir hasil akhir tidak sesuai ekspektasi</li>
          <li>Cemas jika pekerjaan terlambat selesai</li>
        </ul>
        <p className="mt-4 text-gray-700 font-bold">
          Jika iya, kami siap membantu Anda untuk{" "}
          <span className="text-maroon-600">mewujudkan rumah impian</span>
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10">
          Hal yang perlu Anda ketahui sebelum membangun rumah:
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Jasa renovasi yang profesional bisa menghemat biaya dan waktu</li>
          <li>Desain awal sangat penting untuk menghindari pembengkakan biaya</li>
          <li>Pilih kontraktor yang menyediakan desain 2D, 3D, dan gambar kerja</li>
          <li>Jadwal pengerjaan proyek harus jelas agar proses lebih teratur</li>
          <li>Struktur bangunan harus diperhitungkan dengan baik</li>
          <li>Pengawasan proyek memastikan spesifikasi tetap sesuai</li>
          <li>Jangan hanya fokus pada tampilan fasad, perhatikan juga kekuatan bangunan</li>
          <li>Renovasi bisa lebih mahal dibandingkan membangun dari nol</li>
        </ul>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10">
          Data yang harus diperoleh saat bekerja dengan arsitek:
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Denah rumah dalam format 2D</li>
          <li>Gambar 3D dengan visual realistis</li>
          <li>Gambar kerja atau Detail Engineering Design (DED)</li>
          <li>Jadwal proyek dalam bentuk kurva S</li>
          <li>Perhitungan struktur bangunan yang akurat</li>
          <li>As-built drawing yang mencatat perubahan selama proyek</li>
        </ul>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10">
          Layanan Lainnya
        </h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {layananLainnya.map((layanan, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>{layanan}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <AllPackage />
        </div>
      </div>
    </div>
  );
};

export default LayananUtama;
