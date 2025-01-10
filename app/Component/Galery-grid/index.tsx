"use client";

import React from "react";
import Image from "next/image";
import PondokDukuh1 from "../../Assets/pondokdukuh1.png";
import BapakLukas1 from "../../Assets/bapaklukas1.png";
import PondokKuliner1 from "../../Assets/pondokkuliner1.png";
import TbSimatupang1 from "../../Assets/tbsimatupang1.png";
import KosKuliner1 from "../../Assets/kioskuliner1.png";
import Masjid from "../../Assets/hero-image.png";
import Firman from "../../Assets/firman.png";
import Aldi from "../../Assets/aldi1.png";
import Haryono from "../../Assets/haryono1.png";
import Joshua from "../../Assets/joshua.png";
import LoketTiket from "../../Assets/lokettiket1.png";
import Meja from "../../Assets/meja.png";
import Renaldy from "../../Assets/renaldy1.png";
import Tebet from "../../Assets/tebet1.png";

const projects = [
  {
    id: 1,
    title: "LAPANGAN PADEL  TB. SIMATUPANG",
    image: TbSimatupang1,
  },
  {
    id: 2,
    title: "MASJID AL-MU’MIN  DUREN SAWIT-JAKARTA TIMUR",
    image: Masjid,
  },
  {
    id: 3,
    title: "RENOVASI RUMAH Pondok Dukuh Indah 5- Kramatjati Jaktim",
    image: PondokDukuh1,
  },
  {
    id: 4,
    title: "Rumah tinggal Bp. Lukas @Gemini Residen (Bekasi-Jabar)",
    image: BapakLukas1,
  },
  {
    id: 5,
    title: "Pondok Kuliner Wonokerto Kulon- Pekalongan",
    image: PondokKuliner1,
  },
  {
    id: 6,
    title: "KIOS KULINER Kementrian Kelautan & Perikanan",
    image: KosKuliner1,
  },
  {
    id: 7,
    title: "LOKET TIKET Kementrian Kelautan & Perikanan",
    image: LoketTiket,
  },
  {
    id: 8,
    title: "RUMAH TINGGAL BP. HARIONO SUBANG -JAWABARAT",
    image: Haryono,
  },
  {
    id: 9,
    title: "RUMAH TINGGAL MINIMALIST @TEBET -JAKSEL",
    image: Tebet,
  },
  {
    id: 10,
    title: "RUMAH TINGGAL BP. ALDI CIRACAS -JAKTIM",
    image: Aldi,
  },
  {
    id: 11,
    title: "RENOVASI FAÇADE RUMAH BP. RENALDY KP. DUKUH –JAKARTA TIMUR",
    image: Renaldy,
  },
  {
    id: 12,
    title: "RUMAH KOS-KOSAN BP.JOSHUA @LAMPUNG",
    image: Joshua,
  },
  {
    id: 13,
    title: "DESAIN MEJA BP. CRIST @KP.DUKUH -JAKTIM",
    image: Meja,
  },
  {
    id: 14,
    title: "RUMAH BP.FIRMAN @CIBUBUR",
    image:Firman,
  },
];

const GaleryGrid = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center font-semibold px-4">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryGrid;
