// app/api/upload/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Project from "@/models/Project";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const deadlineProjectRaw = formData.get("deadlineProject");
    const deadlineProject = deadlineProjectRaw ? JSON.parse(deadlineProjectRaw as string) : null;

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const userId = formData.get("userId") as string;
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
    }

    const createdBy = new mongoose.Types.ObjectId(userId);
    const picture = path.join(uploadsDir, file.name);
    const relativePath = `/uploads/${file.name}`;

    fs.writeFileSync(picture, buffer);

    const newProject = await Project.create({
      name,
      description,
      picture: relativePath,
      createdBy,
      deadlineProject, // مقدار به‌درستی ارسال شده است
    });

    return NextResponse.json({
      message: "فایل با موفقیت ذخیره شد.",
      project: newProject,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "خطا در ذخیره‌سازی فایل." },
      { status: 500 }
    );
  }
}


