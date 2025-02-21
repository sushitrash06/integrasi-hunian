import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        nama_project: true,
        deskripsi: true,
        gambar: true, // Ini array URL gambar
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: String(error) });
  }
}
