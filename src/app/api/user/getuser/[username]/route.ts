import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function GET(req: NextRequest, {params}:any){
    try {
        const username = params.username;
        const post = await User.findOne({username: username}).select("-password").populate("following","name userimage").populate("followers","name userimage");
        
        return NextResponse.json(post,{status:201})
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
} 
