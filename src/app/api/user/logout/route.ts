import { NextResponse,NextRequest } from "next/server";

export async function GET(req:NextRequest){
    try {
        const token = req.cookies.get('token')?.value || '';

        if(!token){
            return NextResponse.json({error: "Not Logged in"},{status: 404});
        }


        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        })
        response.cookies.set("token","",{
            httpOnly: true,
            expires: new Date(0)
        })

        return response;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },{status: 500})
    }
}