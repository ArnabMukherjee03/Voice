import { getDataFromToken } from "@/helpers/getData";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";


export async function GET(req:NextRequest){
    try {
        const token = await getDataFromToken(req);
        const user = await User.findById(token).select("-password");
        return NextResponse.json(user,{status: 201});
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500});
    }
}