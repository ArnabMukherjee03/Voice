import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { error } from "console";

connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {username,email,password} = reqBody;

        // Check if user already exists
        const user = await User.findOne({email})
        if(user){
            return new NextResponse( JSON.stringify({error: "User already exists"}),{status: 400})
        }

        // check if username already exists
        const userName = await User.findOne({username});
        if(userName){
            return NextResponse.json({error: "Username already exists"},{status: 400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create new user
        const newUser = new User({
            ...reqBody,
            password: hashedPassword
        });
        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created sucessfully",
            success: true
           },
            {status: 201})
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500});
    }
}

