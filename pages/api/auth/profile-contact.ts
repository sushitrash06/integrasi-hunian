import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
            select: { id: true, email: true, name: true, phone: true, address: true, role: true },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User profile fetched successfully", data: user });
    } catch (error) {
        console.error("Error fetching user profile:", error); // Tambahin log ini
        res.status(500).json({ message: "Internal server error", error: String(error) });
    }
}
