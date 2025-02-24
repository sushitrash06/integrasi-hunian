import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;
    const { id } = req.query; // Ambil ID dari URL

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    switch (method) {
      case "PUT":
        // Protected API: Edit Paket Hunian
        if (!authenticate(req)) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const updatedPackage = await prisma.package.update({
          where: { id: Number(id) },
          data: req.body, // Update semua data yang dikirim
        });

        return res.status(200).json(updatedPackage);

      case "DELETE":
        // Protected API: Delete Paket Hunian
        if (!authenticate(req)) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        await prisma.package.delete({ where: { id: Number(id) } });

        return res.status(200).json({ message: "Deleted successfully" });

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
