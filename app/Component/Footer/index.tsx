import React from "react";

const Footer: React.FC = () => {
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
            <li>Kantor Pusat Jakarta</li>
            <li>Kantor Operasional Jawa Tengah</li>
            <li>Kantor Operasional Bandung</li>
            <li>+6281911712052</li>
            <li>ihsanudinramdani@gmail.com</li>
          </ul>
        </div>

        {/* Visi */}
        <div>
          <h2 className="font-bold text-lg mb-4">Visi Kami</h2>
          <p>
            Visi kami adalah untuk menyediakan jasa Borongan yang membantu Anda
            dalam menciptakan bangunan yang sesuai dengan impian Anda. Karena
            impian Anda adalah semangat kami untuk bekerja.
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
