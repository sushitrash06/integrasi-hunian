"use client";
import React, { useState } from "react";
import Image from "next/image";
import heroImage from "../../Assets/banner-hero.png";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const HeroSection: React.FC = () => {
  const layananLainnya = [
    {
      title: "Jasa Renovasi dan Perbaikan",
      link: "/services/jasa-renovasi"
    },
    {
      title: "Jasa Borongan Bangunan",
      link: "/services/borongan-bangunan"
    },
    {
      title: "Jasa Arsitek",
      link: "/services/jasa-architect"
    },
  ];
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
        <p className="mt-4 text-lg md:text-xl max-w-xl text-black">
          Integrasi Hunian adalah penyedian jasa desain arsitektur/ struktur/
          interior/ lanscape sekaligus dengan pekerjaan konstruksinya.
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
              <BiChevronDown className="text-white"/>
            </button>
            {isDropdownOpen && (
              <ul className="absolute p-3 left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                {layananLainnya &&
                  layananLainnya.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={data.link.toString()}
                          className="block text-gray-700 hover:text-maroon-700 hover:font-semibold"
                        >
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
          <a href="/projects" className="hover:text-maroon-700">
            Project
          </a>
          <a href="/all-package" className="hover:text-maroon-700">
            Paket
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
