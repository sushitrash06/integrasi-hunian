import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "rahasia_superadmin";

export function authenticate(req: NextApiRequest) {
  const token = req.headers.authorization?.split(" ")[1]; // Ambil token setelah "Bearer "
  console.log("Token yang diterima di backend:", token);

  if (!token) {
    console.log("Token tidak ditemukan di header");
    return false;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Token valid, payload:", decoded);
    return decoded;
  } catch (error) {
    console.log("Token invalid:", error);
    return false;
  }
}
