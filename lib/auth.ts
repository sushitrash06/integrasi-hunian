import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const SECRET_KEY = process.env.SECRET_KEY!;

export function authenticate(req: NextApiRequest, res: NextApiResponse) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorized" });
        return null;
    }

    const token = authHeader.split(" ")[1];
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        res.status(401).json({ message: error });
        return null;
    }
}
