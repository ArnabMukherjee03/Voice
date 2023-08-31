import { NextResponse,NextRequest } from "next/server";
import { getDataFromToken } from "@/helpers/getData";
import { connect } from "@/dbConfig/dbConfig";
import blog from "@/models/blogModel";

connect();

export async function PUT(request:NextRequest, {params}:any){
    try {
        const postId = params.id;
        const userId = await getDataFromToken(request);
        const response = await blog.findByIdAndUpdate(postId,{
            $push:{likes:userId}
        })
        return NextResponse.json({userId},{status:201});
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}