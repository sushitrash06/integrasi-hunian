import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest, { params }: { params: { filename: string } }) {
    const filePath = path.join(process.cwd(), "public/uploads", params.filename);

    if (!fs.existsSync(filePath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": "image/png",
            "Cache-Control": "no-store, must-revalidate",
        },
    });
}
