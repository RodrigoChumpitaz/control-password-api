import { Schema, model } from "mongoose";


const passwordInfoSchema = new Schema({
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    sugestedPassword: { type: String, required: true },
    active: { type: Boolean, required: true },
},{
    timestamps: true,
    versionKey: false
})


export default model("PasswordInfo", passwordInfoSchema);
