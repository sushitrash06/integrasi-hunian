/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const prisma = new PrismaClient();

// Pastikan folder "public/uploads" ada
const uploadDir = "./public/uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Konfigurasi Multer
const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 2 * 1024 * 1024 }, // Max 2MB per file
});

// Middleware untuk handle multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

// API Handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  upload.array("gambar", 5)(req as any, res as any, async (err) => {
    if (err) return res.status(400).json({ message: err.message });

    const { nama_project, deskripsi } = req.body;
    const files = (req as any).files;

    if (!nama_project || !deskripsi || !files?.length) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }

    // Simpan URL gambar
    const gambarUrls = files.map((file: any) => `/uploads/${file.filename}`);

    try {
      const project = await prisma.project.create({
        data: {
          nama_project,
          deskripsi,
          gambar: gambarUrls,
        },
      });

      res.status(201).json({ message: "Project added", project });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: String(error) });
    }
  });
}
