import {Schema, model} from "mongoose";

const roleSchema = new Schema({
    role: {String, default: "USER", required:true, unique: true}
})

export default model("Role", roleSchema)