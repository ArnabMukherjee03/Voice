import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getData";

connect();

export async function PUT(req:NextRequest) {
    try {
        const followId = await req.json();
        console.log(followId);

        const userId = await getDataFromToken(req);

        const followers = await User.findByIdAndUpdate(followId,{
            $push:{followers: userId}
        },);

        const following = await User.findByIdAndUpdate(userId,{
            $push:{following: followId}
        })

        return NextResponse.json({message: "Succesfull",followers,following},{status:201});

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500});
    }
}