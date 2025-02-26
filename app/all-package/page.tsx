/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBuilding, FaTools, FaCogs, FaTree, FaPaintRoller, FaBath, FaCubes, FaColumns, FaHome } from "react-icons/fa";

export interface Package {
  id: number;
  name: string;
  price: string;
  foundation: string;
  structure: string;
  wall: string;
  frame: string;
  ceiling: string;
  roof: string;
  floor: string;
  sanitary: string;
  paint: string;
}

export default function AllPackage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/service/package");
      setPackages(res.data);
    } catch (err) {
      console.error("Error fetching packages:", err);
      setError("Gagal mengambil data paket.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPackage = (pkg: Package) => {
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang dituju
    const whatsappMessage = `Saya tertarik dengan paket ${pkg.name} dengan harga ${pkg.price}. Mohon informasi lebih lanjut.`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-6">Paket Borongan</h1>
      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-center">{pkg.name}</h3>
            <p className="text-center text-2xl font-bold text-maroon-600">{pkg.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li><FaBuilding className="inline mr-2" /><strong>Fondasi:</strong> {pkg.foundation}</li>
              <li><FaCogs className="inline mr-2" /><strong>Struktur:</strong> {pkg.structure}</li>
              <li><FaTree className="inline mr-2" /><strong>Dinding:</strong> {pkg.wall}</li>
              <li><FaColumns className="inline mr-2" /><strong>Kusen:</strong> {pkg.frame}</li>
              <li><FaTools className="inline mr-2" /><strong>Plafon:</strong> {pkg.ceiling}</li>
              <li><FaHome className="inline mr-2" /><strong>Atap:</strong> {pkg.roof}</li>
              <li><FaCubes className="inline mr-2" /><strong>Lantai:</strong> {pkg.floor}</li>
              <li><FaBath className="inline mr-2" /><strong>Sanitasi:</strong> {pkg.sanitary}</li>
              <li><FaPaintRoller className="inline mr-2" /><strong>Cat:</strong> {pkg.paint}</li>
            </ul>
            <button  onClick={() => handleSelectPackage(pkg)} className="mt-4 w-full bg-maroon-dark text-white py-2 rounded-lg hover:bg-maroon-600">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
