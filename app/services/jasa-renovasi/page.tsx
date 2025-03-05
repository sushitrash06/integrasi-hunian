import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../Assets/working-blueprint.jpg";

const LayananUtama: React.FC = () => {
  const layananLainnya = [
    "Jasa Renovasi dan Perbaikan Rumah",
    "Jasa Renovasi dan Perbaikan Ruko",
    "Jasa Renovasi dan Perbaikan Kamar Mandi",
    "Jasa Renovasi dan Perbaikan Atap / Genteng",
    "Jasa Renovasi dan Perbaikan Lantai",
    "Jasa Renovasi dan Perbaikan Pagar",
    "Jasa Renovasi Meningkat Rumah",
    "Jasa Renovasi Tambah Ruangan",
    "Jasa Renovasi Membuat Dak",
    "Jasa Pengecatan",
  ];

  return (
    <div className="p-5">
      <div className="relative h-screen bg-gray-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={Image1}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-40"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 text-white">
          <h1 className="text-4xl text-center text-white md:text-6xl font-bold">
            Jasa Renovasi
          </h1>
        </div>
      </div>

      {/* Section Tambahan */}
      <div className="mt-10 px-8 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Apakah Anda sedang merasakan hal-hal ini sekarang?
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Mau renovasi rumah tapi bingung cari kontraktor yang amanah</li>
          <li>Mau renovasi rumah tapi takut kemahalan</li>
          <li>Mau renovasi rumah tapi takut hasilnya mengecewakan</li>
          <li>Mau renovasi rumah tapi takut kerjaan kontraktornya molor</li>
        </ul>
        <p className="mt-4 text-gray-700 font-bold">
          Jika iya, Mari Kami Bantu Untuk{" "}
          <span className="text-maroon-600">Merenovasi Rumah</span> Anda
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10">
          Sebelum bangun rumah, sebaiknya ketahui hal-hal berikut ini:
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>
            Penggunaan jasa renovasi rumah bisa menghemat waktu & biaya jika
            dikerjakan oleh kontraktor profesional, namun biaya akan bengkak
            jika kontraktor Anda asal-asalan
          </li>
          <li>
            Pastikan Anda mendesain terlebih dahulu untuk mendapatkan gambaran
            secara nyata sebelum melakukan renovasi karena perubahan-perubahan
            pekerjaan ditengah jalan akan membuat biaya bengkak
          </li>
          <li>
            Pastikan kontraktor Anda menyediakan jasa desain seperti desain
            denah 2 dimensi, desain rumah 3 dimensi, serta desain gambar kerja
            agar Anda memiliki dokumentasi rumah
          </li>
          <li>
            Pastikan Anda mendapatkan jadwal pengerjaan proyek yang tertuang
            dalam dokumen kurva S sebagai acuan pekerjaan di lapangan
          </li>
          <li>
            Pastikan struktur bangunan bangunan Anda sudah dihitung oleh ahli
            struktur karena hal ini sangat krusial dalam pembangunan rumah
          </li>
          <li>
            Pastikan Anda benar-benar mengawasi pelaksanaan dalam pembangunan
            agar spesifikasi yang terpasang sesuai dengan yang ditawarkan
          </li>
          <li>
            Jangan hanya terpaku pada desain fasade (tampak depan) yang bagus
            namun memiliki struktur bangunan yang rapuh, karena usia bangunan
            Anda ditentukan oleh struktur bangunan yang kokoh
          </li>
          <li>Biaya renovasi mungkin lebih mahal dibanding bangun baru</li>
        </ul>
        <div className="mt-10 ">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Data yang harus didapatkan ketika mendesain rumah bersama arsitek profesional
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Desain denah rumah dalam bentuk 2D</li>
          <li>Gambar visual realistik 3D yang dirender halus</li>
          <li>Gambar kerja atau DED (Detail Engineering Design) sebagai acuan tim teknis di lapangan dalam bekerja</li>
          <li>Jadwal pengerjaan (time schedule) dalam bentuk kurva S sebagai acuan jadwal pekerjaan</li>
          <li>Perhitungan struktur bangunan yang telah dipastikan tepat dan akurat</li>
          <li>As built drawing, yang biasanya berisi informasi seputar perubahan yang terjadi selama proyek seperti pada jaringan listrik, alur pipa, dll.</li>
        </ul>
      </div>
        {/* Layanan Lainnya dengan Icon */}
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
      </div>
    </div>
  );
};

export default LayananUtama;