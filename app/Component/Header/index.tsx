"use client";
import Image from "next/image";
import { IoCall, IoLocation, IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../Assets/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useProfile } from "@/app/Context/profile-context";
import { BiChevronDown } from "react-icons/bi";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Service", path: "/dashboard/service" },
  { name: "Project", path: "/dashboard/project" },
  { name: "Package", path: "/all-package" },
];

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

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { profile, isAuthenticated } = useProfile();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Mencegah SSR rendering sebelum client-side mount

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
                <p className="text-sm font-semibold">{profile?.phone}</p>
                <p className="text-sm">{profile?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <IoLocation size={24} className="text-white" />
              <div>
                <p className="text-sm font-semibold">Area Layanan</p>
                <p className="text-sm">Jabodetabek</p>
              </div>
            </div>
          </div>

          <button className="block md:hidden text-white" onClick={toggleDrawer}>
            <IoMenu size={24} />
          </button>
        </div>
      </div>
      {!isAuthenticated ? (
        <>
          {isDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
              <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col">
                <div className="flex justify-between items-center p-4">
                  <span className="font-bold text-lg text-maroon-700">
                    Menu
                  </span>
                  <button onClick={toggleDrawer}>
                    <IoClose size={24} className="text-maroon-700" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-4 px-4">
                  <Link
                    href="#"
                    className="text-maroon-700 hover:text-maroon-500"
                  >
                    Tentang Kami
                  </Link>
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className="text-maroon-700 flex items-center space-x-2 hover:text-maroon-500"
                    >
                      <span>Layanan Kami</span>

                      <BiChevronDown className="text-maroon-600" />
                    </button>
                    {isDropdownOpen && (
                      <ul className="mt-2 space-y-2">
                        {layananLainnya &&
                          layananLainnya.map((data, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  href={data.link}
                                  className="block hover:font-semibold text-gray-700 hover:text-maroon-700"
                                >
                                  {data.title}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </div>
                  <Link
                    href="/projects"
                    className="text-maroon-700 hover:text-maroon-500"
                  >
                    Project
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
                    <BiChevronDown className="text-maroon-600" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute p-3 left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                      {layananLainnya &&
                        layananLainnya.map((data, index) => {
                          return (
                            <li key={index}>
                              <Link
                                href={data.link}
                                className="block text-gray-700 hover:text-maroon-700"
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
              </nav>
            </div>
          )}
        </>
      ) : (
        <>
          <nav className="flex gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-2 px-4"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
