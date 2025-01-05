import { FC } from "react";
import { FaTools, FaClock, FaMoneyBillWave, FaGem } from "react-icons/fa";

const IntegrationSection: FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          INTEGRASI <span className="text-red-600">HUNIAN</span> Pilihan Tepat Untuk Jasa Renovasi, Borongan Bangunan, dan Arsitek Anda
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tenaga Profesional */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaTools className="text-4xl text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tenaga Profesional</h3>
            <p className="text-gray-600">
              Para tukang dan tim management kami merupakan tim pilihan yang ahli di bidangnya sehingga kualitas pekerjaan akan terus terjaga dengan baik.
            </p>
          </div>

          {/* Tepat Waktu */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaClock className="text-4xl text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tepat Waktu</h3>
            <p className="text-gray-600">
              Penggunaan teknologi seperti aplikasi manajemen proyek menjadikan proyek teratur dengan baik sehingga pekerjaan selalu tepat pada waktunya.
            </p>
          </div>

          {/* Harga Terjangkau */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaMoneyBillWave className="text-4xl text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Terjangkau</h3>
            <p className="text-gray-600">
              Harga kami bisa menyesuaikan dengan budget Anda. Komunikasikan budget Anda, maka pekerjaan akan menyesuaikan budget.
            </p>
          </div>

          {/* Material Terbaik */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaGem className="text-4xl text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Terbaik</h3>
            <p className="text-gray-600">
              Bahan material memegang peranan penting pada kualitas, dan kami hanya menggunakan bahan material yang berkualitas baik.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
