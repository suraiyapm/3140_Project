import mongoose from "mongoose";


const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true
});

const User = mongoose.model("Users", usersSchema);

export default User;