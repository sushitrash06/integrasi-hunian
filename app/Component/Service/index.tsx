import React from "react";
import Image from "next/image";
import Image1 from '../../Assets/image3.png'
import Image2 from '../../Assets/image4.png'
import Image3 from '../../Assets/image5.png'
import Link from "next/link";

const LayananUtama: React.FC = () => {

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
            <Link href="/services/borongan-bangunan">
            <Image
               src={Image3}
              alt="Borongan Bangunan"
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Borongan Bangunan</h3>
            </div>
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananUtama;
