import React from "react";

const SectionRenovasi: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Bisa Jadi Ini Yang Anda <span className="text-maroon-500">Rasakan</span> Sekarang :
          </h2>
        </div>

        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-4">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mau renovasi rumah tapi bingung cari kontraktor yang amanah</li>
              <li>Mau renovasi rumah tapi takut kemahalan</li>
              <li>Mau renovasi rumah tapi hasilnya mengecewakan</li>
              <li>Mau renovasi rumah tapi takut kerjaan kontraktornya molor</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 px-4 text-center">
            <img
              src="/images/didik-subi.png"
              alt="Didik Subi"
              className="inline-block rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>DIDIK SUBI</strong>
                <br />
                (Owner Integrasi Hunian)
                <br />
                @didiksubi
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800">
            Jika iya, Mari Kami Bantu Untuk <span className="text-maroon-500">Merenovasi Rumah</span> Anda
          </h3>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <h4 className="text-xl font-bold text-center text-gray-800 mb-6">
            Sebelum renovasi rumah, pastikan Anda paham ini dulu
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Penggunaan jasa renovasi rumah bisa menghemat waktu & biaya jika dikerjakan oleh kontraktor profesional,
              namun biaya akan bengkak jika kontraktor Anda asal-asalan
            </li>
            <li>
              Pastikan Anda mendesain terlebih dahulu untuk mendapatkan gambaran secara nyata sebelum melakukan renovasi
              karena perubahan-perubahan pekerjaan ditengah jalan akan membuat biaya bengkak
            </li>
            <li>
              Pastikan kontraktor Anda menyediakan jasa desain seperti desain denah 2 dimensi, desain rumah 3 dimensi,
              serta desain gambar kerja agar Anda memiliki dokumen yang lengkap
            </li>
            <li>Pastikan Anda mendapatkan jadwal pengerjaan proyek yang tertuang dalam dokumen kurva S</li>
            <li>
              Pastikan struktur bangunan bangunan Anda sudah dihitung oleh ahli struktur karena hal ini sangat krusial
              dalam pembangunan rumah
            </li>
            <li>
              Pastikan Anda benar-benar mengevaluasi pelaksanaan dalam pembangunan agar spesifikasi yang terpasang sesuai
              dengan yang ditawarkan
            </li>
            <li>
              Jangan hanya terpaku pada desain fasade (tampak depan) yang bagus namun memiliki struktur bangunan yang
              rapuh, karena usia bangunan Anda ditentukan oleh struktur bangunan yang kokoh
            </li>
            <li>Biaya renovasi mungkin lebih mahal dibanding bangun baru</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionRenovasi;
