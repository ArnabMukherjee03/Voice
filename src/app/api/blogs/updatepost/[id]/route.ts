import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import blog from "@/models/blogModel";

connect();

export async function PUT(req:NextRequest, {params}:any){
    try {
        const id = params.id;
        const post = blog.findById(id);
        const reqBody = await req.json();
        if(!post){
            return NextResponse.json({message: "Post not Found"},{status:404});
        }

        const response = await blog.findByIdAndUpdate(id,{$set: reqBody});

        return NextResponse.json({message: "Update Sucessfully" , response },{status: 201})
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500});
    }
}








