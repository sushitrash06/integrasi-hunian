"use client";
import { useProfile } from "@/app/Context/profile-context";
import React from "react";

const Footer: React.FC = () => {
    const { profile, isAuthenticated } = useProfile();
  return (
    <footer className="bg-maroon-700 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Jasa Kami */}
        <div>
          <h2 className="font-bold text-lg mb-4">Jasa Kami</h2>
          <ul className="space-y-2">
            <li>Jasa Arsitek</li>
            <li>Jasa Bangun Rumah</li>
            <li>Jasa Bangun Kantor</li>
            <li>Jasa Renovasi Rumah</li>
            <li>Borongan Kolam Renang</li>
          </ul>
        </div>

        {/* Kantor */}
        <div>
          <h2 className="font-bold text-lg mb-4">Kantor Integrasi Hunian</h2>
          <ul className="space-y-2">
            <li>{profile?.email}</li>
            <li>{profile?.phone}</li>
            <li>{profile?.address}</li>
          </ul>
        </div>

        {/* Visi */}
        <div>
          <h2 className="font-bold text-lg mb-4">Tentang Kami</h2>
          <p>
          Integrasi Hunian adalah penyedian jasa desain arsitektur/ struktur/ interior/ lanscape sekaligus dengan pekerjaan konstruksinya.  
        Adapun lingkup bangunan yang biasa kami kerjakan diantaranya membangun rumah tinggal, kos-kosan/ kontrakan, ruko/rukan, gudang, dan sejenisnya. Sedangkan untuk Jasa Gambar dan RAB kami melayani semua Jenis bangunan mulai dari yang kecil seperti Ruko sampai high rise building.
        untuk jenis gambar yang kami kuasai seperti :Forcont, Shop Drawing, As Built Drawing, 3d, Video animasi, gambar utk keperluan IMB, dll.

          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} IntegrasiHunian. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
