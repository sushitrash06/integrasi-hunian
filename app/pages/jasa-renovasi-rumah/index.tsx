import React from "react";

const RenovasiPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-maroon-500 mt-8">
          Bisa Jadi Ini Yang Anda Rasakan Sekarang:
        </h1>
        <ul className="mt-4 text-gray-700 space-y-2 text-left max-w-md mx-auto">
          <li>- Mau renovasi rumah tapi bingung cari kontraktor yang amanah</li>
          <li>- Mau renovasi rumah tapi takut kemahalan</li>
          <li>- Mau renovasi rumah tapi takut hasilnya mengecewakan</li>
          <li>- Mau renovasi rumah tapi kerjaan kontraktornya molor</li>
        </ul>
        <div className="mt-8">
          <img
            src="/images/renovasi.jpg"
            alt="Renovasi rumah"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section: Merenovasi Rumah */}
      <div className="bg-maroon-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Jika iya, Mari Kami Bantu Untuk{" "}
            <span className="underline">Merenovasi Rumah Anda</span>
          </h2>
        </div>
      </div>

      {/* Section: Sebelum Renovasi */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Sebelum renovasi rumah, pastikan Anda paham ini dulu
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <ul className="text-gray-700 space-y-4">
                <li>
                  - Penggunaan jasa renovasi rumah bisa menghemat waktu & biaya
                  jika dikerjakan oleh kontraktor profesional.
                </li>
                <li>
                  - Pastikan Anda mendesain terlebih dahulu untuk mendapatkan
                  gambar secara nyata.
                </li>
                <li>
                  - Pastikan kontraktor Anda menyediakan gambar desain seperti
                  denah 2 dimensi.
                </li>
                <li>
                  - Jangan hanya terpaku pada desain fasade (tampak depan) yang
                  bagus.
                </li>
                <li>
                  - Biaya renovasi mungkin lebih mahal dibanding bangun baru.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="/images/planning.jpg"
                alt="Planning"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Data Renovasi */}
      <div className="bg-maroon-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Data Yang Wajib Anda Dapatkan Saat Renovasi Rumah:
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="/images/blueprint.jpg"
                alt="Blueprint"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <ul className="text-left space-y-4">
                <li>- Denah rumah dalam bentuk 2 dimensi</li>
                <li>- Gambar render 3D (tergantung kebutuhan) untuk bekerja</li>
                <li>- Jadwal pengerjaan sesuai timeline proyek</li>
                <li>- Spesifikasi material bangunan Anda</li>
                <li>
                  - As built drawing (gambar lapangan) secara final terkait
                  posisi akhir dari bangunan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovasiPage;
