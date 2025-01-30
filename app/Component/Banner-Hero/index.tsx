"use client"
import React, { useState } from "react";
import Image from "next/image";
import heroImage from "../../Assets/banner-hero.png";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      <div className="absolute hidden top-0 left-0 right-0 z-20 md:flex items-center justify-between px-8 md:px-16 py-4">
        <nav className="space-x-8 text-white relative">
          <a href="#" className="hover:text-maroon-700">
            Tentang Kami
          </a>
          <div className="inline-block relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-maroon-700 flex items-center space-x-2"
            >
              <span>Layanan Kami</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <li>
                  <Link
                    href="/jasa-renovasi-rumah"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jasa Renovasi Rumah
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jasa Bangun Rumah
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kontraktor Kost
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kontraktor Kolam Renang
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kontraktor Ruko
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jasa Pengurusan IMB
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jasa Desain Arsitek
                  </a>
                </li>
              </ul>
            )}
          </div>
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
