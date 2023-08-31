import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function GET(req: NextRequest){
    try {
        const users = await User.find({}).select("-password")
        return NextResponse.json(users,{status:201})
    } catch (error:any) {
        console.log("error",error);
        return NextResponse.json({error: error.message},{status:500})
    }
} 
