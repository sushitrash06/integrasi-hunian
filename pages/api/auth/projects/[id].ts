import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "ID tidak valid" });
  }

  try {
    if (req.method === "GET") {
      const project = await prisma.project.findUnique({
        where: { id },
      });
      if (!project) return res.status(404).json({ message: "Project tidak ditemukan" });
      return res.status(200).json(project);
    }

    if (req.method === "PUT") {
      const { nama_project, deskripsi, gambar } = req.body;
      const updatedProject = await prisma.project.update({
        where: { id },
        data: { nama_project, deskripsi, gambar },
      });
      return res.status(200).json(updatedProject);
    }

    if (req.method === "DELETE") {
      await prisma.project.delete({ where: { id } });
      return res.status(200).json({ message: "Project berhasil dihapus" });
    }

    return res.status(405).json({ message: "Method tidak diizinkan" });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan", error: String(error) });
  }
}
