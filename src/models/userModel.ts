import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide a name"],
    },
    username:{
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email:{
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
    },
    bio:{
        type: String
    },
    about:{
        type: String
    },
    userimage:{
        type: String,
    },
    joindate:{
        type: String,
    },
    followers:[
        {
            type: ObjectId,
            ref: "users"
        }
    ],
    following:[{
        type: ObjectId,
        ref: "users"
    }],
    isVerfied:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;