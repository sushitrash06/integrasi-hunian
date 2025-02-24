/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useState, useEffect } from "react";
import axios from "axios";

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

export default function PackageManagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    foundation: "",
    structure: "",
    wall: "",
    frame: "",
    ceiling: "",
    roof: "",
    floor: "",
    sanitary: "",
    paint: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
      console.log(token, 'ini token')
      if (editId) {
        await axios.put(`/api/service/package/${editId}`, formData, { headers });
      } else {
        await axios.post("/api/service/package", formData, { headers });
      }

      closeModal();
      fetchPackages();
    } catch (error) {
      console.error("Error saving package", error);
      setError("Gagal menyimpan paket.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus paket ini?")) return;
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      console.log(token, 'ini token')
      await axios.delete(`/api/service/package/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPackages();
    } catch (error) {
      console.error("Error deleting package", error);
      setError("Gagal menghapus paket.");
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (pkg: Package) => {
    setFormData(pkg);
    setEditId(pkg.id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditId(null);
    setFormData({
      name: "",
      price: "",
      foundation: "",
      structure: "",
      wall: "",
      frame: "",
      ceiling: "",
      roof: "",
      floor: "",
      sanitary: "",
      paint: "",
    });
  };

  return (
    <div className="p-6">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Tambah Paket
      </button>

      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nama</th>
            <th className="border border-gray-300 px-4 py-2">Harga</th>
            <th className="border border-gray-300 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{pkg.name}</td>
              <td className="border border-gray-300 px-4 py-2">{pkg.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => openEditModal(pkg)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(pkg.id)} className="bg-red-500 text-white px-3 py-1 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">{editId ? "Edit" : "Tambah"} Paket</h2>
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key:any) => (
                <input
                  key={key}
                  type="text"
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={(formData as any)[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="w-full p-2 border rounded mb-2"
                />
              ))}
              <div className="flex justify-end mt-4">
                <button type="button" onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">
                  Batal
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  {loading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
