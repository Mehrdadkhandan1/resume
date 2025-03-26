import Business from "@/models/Business";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    return NextResponse.json({ status: 200, message: 'Hello world' })
}
export async function GET(req: Request) {
    try {
        await connectDb()
    } catch (err) {
        return NextResponse.json({ status: 500, message: 'feild connected Db' })
    }
    const  data =await Business.find()
    console.log(data);
    return NextResponse.json({ status: 200, message: 'Hello world' })
}