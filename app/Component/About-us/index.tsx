import React from "react";
import ImageHome from "../../Assets/bapaklukas1.png"
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Teks */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Jasa Renovasi, Arsitek, dan Borongan Bangunan
          </h2>
          <p className="text-gray-700 mb-4">
          Banyaknya jenis bangunan dengan desain yang  beragam berdampak pada berubahnya penggunaan bahan/ material bangunan dari tahun ke tahun. Banyak sebagian orang yg membangun huniannya dengan meniru yang ada di internet tapi hasilnya tidak memuaskan dan tidak didukung oleh pekerja yang ahli dibidangnya, pastinya hal tersebut membuat anda pusing karena sudah keluar uang banyak tapi hasilnya tidak sesuai ekspektasi.
            </p>
          <p className="text-gray-700">
          Untuk menciptakan keluarga  harmonis anda  maka sarana yang utama adalah Rumah/ Hunian yang nyaman, <strong>INTEGRASI HUNIAN</strong> hadir untuk melayani anda menciptakan rumah Impian dengan Arsitek & para pekerja bangunan yang sudah kami percaya ahli dibidangnya. Tentunya dengan harga yang terjangkau ditambah sudah FREE biaya gambar 2D /3D, RAB (Rencana Anggaran Bangunan).
            <a
              href="#"
              className="text-red-600 font-semibold hover:underline"
            >
              Borongan bangunan
            </a>
            , dan arsitektur.
          </p>
        </div>

        {/* Gambar */}
        <div>
          <Image
            src={ImageHome}
            alt="Bangunan"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
