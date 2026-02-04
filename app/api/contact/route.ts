import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req:Request) {
    try{
        const { name , email , message } = await req.json();
        if ( !name || !email || !message ) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        await query("INSERT INTO info(name, email, message) VALUES($1, $2, $3)", [name, email, message]);
        return NextResponse.json({ message: "Message sent successfully! I'll get back to you soon." }, { status: 200 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}