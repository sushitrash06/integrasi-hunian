import { useEffect, useState } from "react";

type Project = {
  id: number;
  nama_project: string;
  deskripsi: string;
  gambar: string[];
  createdAt: string;
};

export default function ProjectTable() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/auth/projects");
      if (!res.ok) throw new Error("Gagal mengambil data");
      const data = await res.json();
      setProjects(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: number) => {
    if (!confirm("Yakin ingin menghapus project ini?")) return;

    try {
      const res = await fetch(`/api/auth/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Gagal menghapus project");
      setProjects(projects.filter((project) => project.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
  };

  const handleUpdate = async () => {
    if (!editingProject) return;

    try {
      const res = await fetch(`/api/auth/projects/${editingProject.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProject),
      });
      if (!res.ok) throw new Error("Gagal mengupdate project");

      setProjects(
        projects.map((p) => (p.id === editingProject.id ? editingProject : p))
      );
      setEditingProject(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Daftar Project</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Nama</th>
            <th className="border border-gray-300 p-2">Deskripsi</th>
            <th className="border border-gray-300 p-2">Gambar</th>
            <th className="border border-gray-300 p-2">Dibuat</th>
            <th className="border border-gray-300 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 p-2">{project.nama_project}</td>
              <td className="border border-gray-300 p-2">{project.deskripsi}</td>
              <td className="border border-gray-300 p-2">
                {project.gambar.length > 0 ? (
                  <img src={project.gambar[0]} alt="Preview" className="w-16 h-16 object-cover" />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="border border-gray-300 p-2">{new Date(project.createdAt).toLocaleDateString()}</td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => handleEdit(project)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => deleteProject(project.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProject && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold mb-2">Edit Project</h3>
          <input
            type="text"
            value={editingProject.nama_project}
            onChange={(e) => setEditingProject({ ...editingProject, nama_project: e.target.value })}
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={editingProject.deskripsi}
            onChange={(e) => setEditingProject({ ...editingProject, deskripsi: e.target.value })}
            className="border p-2 w-full mb-2"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded">
            Simpan Perubahan
          </button>
          <button onClick={() => setEditingProject(null)} className="ml-2 text-gray-600">
            Batal
          </button>
        </div>
      )}
    </div>
  );
}
