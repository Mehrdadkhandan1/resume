// app/api/upload/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getServerSession } from "next-auth";
import { authOption } from "../../auth/[...nextauth]/route";
import Project from "@/models/Project";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOption)
    // خواندن داده‌های فرم
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const userId = formData.get("userId")
    const file = formData.get("picture") as File;

    if (!file) {
      return NextResponse.json(
        { message: "فایلی دریافت نشد." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    fs.writeFileSync(filePath, buffer);
    const newProject = Project.create({
      name, description, picture: filePath,
      createdBy : mongoose.Schema.Types.ObjectId
    })
    return NextResponse.json({
      message: "فایل با موفقیت ذخیره شد.",
      fileUrl: `/uploads/${file.name}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "خطا در ذخیره‌سازی فایل." },
      { status: 500 }
    );
  }
}
