import React from "react";
import Image from "next/image";
import heroImage from "../../Assets/hero-image.png"


const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-20"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 text-white">
        <h1 className="text-4xl text-black md:text-6xl font-bold">
          INTEGRASI <span className="text-maroon-700">HUNIAN</span>
        </h1>   
        <p className="mt-1 text-lg text-black">Design & Build</p>
        <p className="mt-4 text-lg md:text-xl text-black">
          Mewujudkan Hunian Impian Anda dengan Desain dan Konstruksi Terbaik
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="#"
            className="bg-maroon-700 text-white py-2 px-4 rounded-md hover:bg-maroon-700-dark"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-4">
        <nav className="space-x-8 text-white">
          <a href="#" className="hover:text-maroon-700">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-maroon-700">
            Layanan Kami
          </a>
          <a href="#" className="hover:text-maroon-700">
            Portofolio
          </a>
        </nav>
        <a
          href="#"
          className="bg-maroon-700 text-white py-2 px-4 rounded-md hover:bg-maroon-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
