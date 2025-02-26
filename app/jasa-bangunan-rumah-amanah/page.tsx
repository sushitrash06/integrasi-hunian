import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Accordion from "../Component/Accoordion";
import {stepsData} from '../../Dummy/jasa-renovasi-rumah'

const IntegrasiHunian: React.FC = () => {
  const problems = [
    "Kesulitan mencari kontraktor yang terpercaya.",
    "Biaya renovasi yang tidak transparan.",
    "Desain tidak sesuai ekspektasi.",
    "Proses pembangunan yang tidak efisien.",
  ];

  const solutions = [
    "Desain rumah 2D & 3D sesuai kebutuhan Anda.",
    "Dokumentasi lengkap untuk proses renovasi.",
    "Konsultasi gratis dengan tim ahli.",
    "Jadwal pengerjaan yang transparan.",
  ];

  const benefits = [
    "Gambar desain rumah 2 dimensi dan 3 dimensi.",
    "Dokumen lengkap untuk pekerjaan di lapangan.",
    "Rincian biaya renovasi yang transparan.",
    "Material bangunan berkualitas tinggi.",
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-maroon-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Integrasi Hunian</h1>
          <p className="text-lg">
            Kami membantu Anda menciptakan hunian yang nyaman, fungsional, dan
            estetik sesuai kebutuhan.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon-700 mb-6 text-center">
            Bisa Jadi Ini Yang Anda Rasakan Sekarang:
          </h2>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start space-x-4">
                <IoCheckmarkCircleOutline
                  size={24}
                  className="text-maroon-700"
                />
                <p className="text-gray-700">{problem}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon-700 mb-6 text-center">
            Jika Iya, Kami Bantu Untuk Mewujudkan Hunian Anda
          </h2>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="text-gray-700">
                {index + 1}. {solution}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon-700 mb-6 text-center">
            Data Yang Wajib Anda Dapatkan Saat Renovasi Rumah:
          </h2>
          <ul className="space-y-4 text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="font-bold">{index + 1}.</span>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Konsultasikan Rencana Renovasi Anda Kepada Tim Ahli Kami
          </h2>
          <button className="bg-yellow-500 text-maroon-700 px-8 py-3 rounded-md font-bold hover:bg-yellow-400">
            Konsultasi Sekarang
          </button>
        </div>
      </section>

      <section className="bg-maroon-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">
      Proses Renovasi Rumah IntegrasiHunian
          </h2>
      </div>
      <Accordion items={stepsData.steps}/>
      </section>
    </div>

  );
};

export default IntegrasiHunian;
