import { NextResponse,NextRequest } from "next/server";
import blog from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req:NextRequest) {
    try {
        const blogData = await req.json();
        console.log(blogData)
        const newBlog = await new blog(blogData);
        const savedBlog = await newBlog.save();

        return NextResponse.json({
            message: "Blog Successfully Save",
            savedBlog
        },{status: 201});

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({error: error.message},{status:500})
    }
}