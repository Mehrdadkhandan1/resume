import formidable from 'formidable';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';


export const config = {
    api: {
        bodyParser: false,
    },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

interface FormidableFile extends formidable.File {
    originalFilename: string
    filepath: string
}

interface FormidableFiles {
    image?: FormidableFile[]
}


export async function POST(req: NextRequest) {
    try {
        await fs.mkdir(uploadDir, { recursive: true });

        const form = formidable({
            uploadDir,
            filename: (name, ext, part, form) => {
                return uuidv4() + ext ;
            },
        });

        return new Promise((resolve, reject) => {
            form.parse(req as any, async (err, fields, files) => {
                if (err) {
                    console.error(err);
                    resolve(NextResponse.json({ message: 'خطا در پردازش فایل' }, { status: 500 }));
                    return;
                }

                const uploadedFile = (files as FormidableFiles)?.image?.[0];
                if (!uploadedFile) {
                    resolve(NextResponse.json({ message: 'فایلی برای آپلود پیدا نشد' }, { status: 400 }));
                    return;
                }

                const fileExtension = path.extname(uploadedFile.originalFilename);
                const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

                if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
                    await fs.unlink(uploadedFile.filepath)
                    resolve(NextResponse.json({ message: 'پسوند فایل غیر مجاز است، لطفاً یک فایل با فرمت jpg، jpeg، png یا gif انتخاب کنید.' }, { status: 400 }));
                    return;
                }


                resolve(NextResponse.json({ message: 'فایل با موفقیت آپلود شد' }, { status: 200 }));
            });
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: 'خطا در آپلود' }, { status: 500 });
    }
}
