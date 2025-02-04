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
    const userId = formData.get("userId") as string
    const file = formData.get("picture") as File;

    if (!name || !description || !file) {
      return NextResponse.json(
        { message: "لطفا تمام فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const createdBy = new mongoose.Types.ObjectId(userId)
    const picture = path.join(uploadsDir, file.name);
    const relativePath = `/uploads/${file.name}`;

    fs.writeFileSync(picture, buffer);

    const newProject = await Project.create({
      name,
      description,
      picture:relativePath,
      createdBy,
    })


    console.log(newProject);
    // بازگشت پاسخ موفقیت‌آمیز
    return NextResponse.json({
      message: "فایل با موفقیت ذخیره شد.",
      project: newProject
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "خطا در ذخیره‌سازی فایل." },
      { status: 500 }
    );
  }
}

