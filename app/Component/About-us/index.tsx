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
            Pada zaman modern ini, seluruh aspek dalam bangunan meliputi keindahan,
            ketahanan, serta harga pembangunan harus sangat diperhatikan. Untuk
            membangun sebuah bangunan yang kokoh dibutuhkan proses pembangunan yang
            terukur serta waktu yang efisien.
          </p>
          <p className="text-gray-700">
            Maka dari itu Bintoro Build hadir untuk mewujudkan impian anda memiliki
            bangunan yang kokoh dan indah dengan harga <strong>TERJANGKAU</strong>{" "}
            melalui jasa renovasi,{" "}
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
