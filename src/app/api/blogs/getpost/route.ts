import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import blog from "@/models/blogModel";

connect();

export async function GET(req: NextRequest){
    const category  = req.nextUrl.searchParams.get('category');
    let posts;
    try {
        if(category){
            posts = await blog.find({tags: category})
        }else{
            posts = await blog.find({}).populate("postedBy","_id name userimage");
        }
        return NextResponse.json(posts,{status:201})
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
} 
