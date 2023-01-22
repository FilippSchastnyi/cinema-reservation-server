import {Schema, model} from "mongoose";

const roleModel = new Schema({
    role: {String, default: "USER", required:true, unique: true}
})

export default model("Role", roleModel)