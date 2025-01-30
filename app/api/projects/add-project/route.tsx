// app/api/upload/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    // خواندن داده‌های فرم
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const file = formData.get("picture") as File;

    if (!file) {
      return NextResponse.json(
        { message: "فایلی دریافت نشد." },
        { status: 400 }
      );
    }

    // تبدیل فایل به بافر
    const buffer = Buffer.from(await file.arrayBuffer());

    // ایجاد پوشه uploads اگر وجود نداشته باشد
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // ذخیره فایل در پوشه public/uploads
    const filePath = path.join(uploadsDir, file.name);
    fs.writeFileSync(filePath, buffer);

    // بازگشت پاسخ موفقیت‌آمیز
    return NextResponse.json({
      message: "فایل با موفقیت ذخیره شد.",
      fileUrl: `/uploads/${file.name}`, // آدرس فایل برای دسترسی عمومی
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "خطا در ذخیره‌سازی فایل." },
      { status: 500 }
    );
  }
}
