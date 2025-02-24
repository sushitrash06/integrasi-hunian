import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        // Public API: List Paket Hunian
        const packages = await prisma.package.findMany();
        return res.status(200).json(packages);

      case "POST":
        // Protected API: Create Paket Hunian
        if (!authenticate(req)) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const { name, price, foundation, structure, wall, frame, ceiling, roof, floor, sanitary, paint } = req.body;
        if (!name || !price) {
          return res.status(400).json({ message: "Name and price are required" });
        }

        const newPackage = await prisma.package.create({
          data: { name, price, foundation, structure, wall, frame, ceiling, roof, floor, sanitary, paint },
        });

        return res.status(201).json(newPackage);

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
