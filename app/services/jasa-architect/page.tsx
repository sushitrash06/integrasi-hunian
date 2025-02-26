import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../Assets/working-blueprint.jpg";

const LayananUtama: React.FC = () => {
  const layananLainnya = [
    "Jasa Arsitek",
    "Jasa desain arsitek rumah 3D",
    "Jasa gambar kerja",
    "Jasa desain interior",
    "Jasa interior",
    "Jasa Partisi",
    "Jasa Instalasi Kanopi",
    "Jual Rangka Atap Baja Ringan",
    "Jual Rolling Door",
    "Jasa Kusen Pintu dan Jendela",
    "Jasa Pengeboran Sumur",
  ];

  return (
    <div className="px-8 md:px-16 p-6 pb-10">
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
            Jasa Arsitek
          </h1>
        </div>
      </div>
      
      {/* Section Tambahan */}
      <div className="mt-10 px-8 md:px-16 px-8 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Apakah Anda sedang merasakan hal-hal ini sekarang?
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Ingin membangun atau renovasi rumah tetapi tidak tahu-menahu bagaimana perencanaan yang tepat.</li>
          <li>Ingin mendesain rumah tetapi bingung mengenai spesifikasi yang sesuai budget.</li>
          <li>Sedang mencari jasa arsitek tetapi belum menemukan arsitek yang dapat dipercaya.</li>
          <li>Ingin menggunakan jasa arsitek profesional, namun khawatir biayanya kemahalan atau tidak terjangkau.</li>
          <li>Ingin menggunakan jasa arsitek tetapi takut dikecewakan dengan kualitas pelayanan dan hasilnya.</li>
        </ul>
        <p className="mt-4 text-gray-700 font-bold">
          Jika iya, kamilah pilihan cerdas untuk kebutuhan desain arsitek Anda
        </p>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10">
          Sebelum bangun rumah, sebaiknya ketahui hal-hal berikut ini:
        </h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>Menggunakan jasa arsitek profesional akan memaksimalkan bangunan dibanding Anda mencari desain-desain dari internet</li>
          <li>Jasa arsitek Kami sangat memperhatikan unsur-unsur kenyamanan, keamanan, serta peduli terhadap lingkungan</li>
          <li>Keterlibatan client berperan aktif sangat dibutuhkan dalam proses desain.</li>
          <li>Menggunakan jasa arsitek sekaligus memastikan bangunan Anda dibangun sesuai dengan standar nasional</li>
          <li>Menggunakan jasa arsitek dapat membantu Anda juga menyusun anggaran pembuatan bangunan</li>
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