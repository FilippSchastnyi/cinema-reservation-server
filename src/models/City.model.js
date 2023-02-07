import {model, Schema} from "mongoose";

const citySchema = new Schema({
  name: {type: String, unique: true}
})

export default model('City', citySchema)