import React from "react";
import Image from "next/image";
import Image1 from '../Assets/image3.png'
import Image2 from '../Assets/image4.png'
import Image3 from '../Assets/image5.png'

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
    "Jasa Borongan Bangunan Rumah",
    "Jasa Borongan Bangunan Ruko",
    "Jasa Borongan Bangunan Kantor",
    "Jasa Borongan Bangunan Gudang",
    "Jasa Borongan Bangunan Kolam Renang",
    "Jasa Borongan Bangunan Kost",
    "Jasa Borongan Bangunan Carport",
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
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-maroon-700 mb-4">
          Layanan Utama Kami
        </h2>
        <p className="text-gray-700 mb-12">
          Berikut layanan utama kami yang bisa Anda pesan:
        </p>

        {/* Layanan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-maroon-700 text-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={Image1}
              alt="Jasa Renovasi"
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Jasa Renovasi</h3>
            </div>
          </div>

          <div className="bg-maroon-700 text-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={Image2}
              alt="Jasa Arsitek"
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Jasa Arsitek</h3>
            </div>
          </div>

          <div className="bg-maroon-700 text-white rounded-lg shadow-md overflow-hidden">
            <Image
               src={Image3}
              alt="Borongan Bangunan"
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Borongan Bangunan</h3>
            </div>
          </div>
        </div>

        {/* Layanan Lainnya */}
        <h3 className="text-2xl font-bold text-maroon-700 mb-6">
          Layanan kami lainnya secara rinci adalah sebagai berikut:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {layananLainnya.map((layanan, index) => (
            <div key={index} className="flex items-center">
              <span className="text-maroon-700 text-xl mr-2">🛠️</span>
              <p className="text-gray-700">{layanan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananUtama;
