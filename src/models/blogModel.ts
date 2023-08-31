import mongoose from "mongoose";
import { type } from "os";
const {ObjectId} = mongoose.Schema.Types;
const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subTitle:{
        type: String
    },
    content:{
        type: String
    },
    image:{
        type: String,
        required: true
    },
    tags:{
        type: [String]
    },
    postedBy:{
        type: ObjectId,
        ref:"users",
        required: true
    },
    writtenDate:{
        type: String,
        required: true
    },
    likes:[
        {
            type: ObjectId,
            ref:"users"
        }
    ]
})

const blog = mongoose.models.blog ||  mongoose.model("blog",blogSchema);

export default blog;