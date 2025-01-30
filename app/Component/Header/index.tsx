"use client";
import Image from "next/image";
import { IoCall, IoLocation, IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../Assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useProfile } from "@/app/Context/profile-context";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { profile } = useProfile();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const pathname = usePathname(); // Get current pathname

  return (
    <header>
      <div className="bg-maroon-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center rounded-r-lg px-4 py-2">
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-12 mx-5">
            <div className="flex items-center space-x-3">
              <IoCall size={24} className="text-white" />
              <div>
                <p className="text-sm font-semibold">{profile?.number_phone}</p>
                <p className="text-sm">{profile?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <IoLocation size={24} className="text-white" />
              <div>
                <p className="text-sm font-semibold">Area Layanan</p>
                <p className="text-sm">{profile?.address}</p>
              </div>
            </div>
          </div>

          <button
            className="block md:hidden text-white"
            onClick={toggleDrawer}
          >
            <IoMenu size={24} />
          </button>
        </div>
      </div>

      {/* Drawer untuk Mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col">
            <div className="flex justify-between items-center p-4">
              <span className="font-bold text-lg text-maroon-700">Menu</span>
              <button onClick={toggleDrawer}>
                <IoClose size={24} className="text-maroon-700" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="#" className="text-maroon-700 hover:text-maroon-500">
                Tentang Kami
              </Link>
              <div>
                <button
                  onClick={toggleDropdown}
                  className="text-maroon-700 flex items-center space-x-2 hover:text-maroon-500"
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
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="block text-gray-700 hover:text-maroon-700"
                      >
                        Jasa Renovasi Rumah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block text-gray-700 hover:text-maroon-700"
                      >
                        Jasa Bangun Rumah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block text-gray-700 hover:text-maroon-700"
                      >
                        Kontraktor Kost
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link href="#" className="text-maroon-700 hover:text-maroon-500">
                Portofolio
              </Link>
              <Link
                href="#"
                className="text-white bg-maroon-700 py-2 px-4 rounded-md hover:bg-maroon-500"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Tampilkan menu hanya di halaman "/" */}
      {pathname !== "/" && (
        <div className="hidden md:flex z-20 items-center justify-between px-8 md:px-16 py-4">
          <nav className="space-x-8 text-maroon-700 relative">
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
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Jasa Renovasi Rumah
                    </a>
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
      )}
    </header>
  );
};

export default Header;
