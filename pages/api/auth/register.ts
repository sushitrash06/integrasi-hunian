import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { email, password, name, phone, address } = req.body;

  // Cek apakah user sudah ada
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return res.status(400).json({ message: "User already exists" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Simpan ke database
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: name || "Admin", // Beri default "Admin" jika tidak diisi
      phone: phone || null, // Bisa nullable
      address: address || null, // Bisa nullable
      updatedAt: new Date(), // Set waktu saat ini
      role: "admin",
    },
  });

  res.status(201).json({ message: "User created", user });
}
