import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req:NextRequest){
    try {
        const reqBody = await req.json();
        const {email,password} = reqBody;

        // Check user exist or not
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "Invalid Credentials"},{status: 400});
        }

        // Check Password valid or not
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid Credentials"},{status: 400});
        }

        // Create Token Data
        const tokenData = {
            id: user._id,
            username: user.username,
        }

        const currentUser = await User.findOne({email}).select("-password").select("-email");

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn:"1d"})
        const response = NextResponse.json({
            message: "Login Sucessfull",
            currentUser,
            sucess: true}
        ,{status:201})

        response.cookies.set("token",token,{
            httpOnly: true,
        })

        return response;

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status: 500});
    }
}