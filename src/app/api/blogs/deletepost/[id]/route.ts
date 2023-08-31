import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import blog from "@/models/blogModel";

connect();

export async function DELETE(req: NextRequest,{params}:any){
    try {
        const id = params.id;
        const post = await blog.findById(id);
        await post.deleteOne();
        return NextResponse.json({message: "Blog sucessfully deleted"},{status:201});
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}
