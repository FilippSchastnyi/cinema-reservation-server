import {Schema, model} from "mongoose";
import rowSchema from "./schemas/Row.schema.js";

const hallSchema = new Schema({
  name: {type: String, required: true},
  plan: [rowSchema],
  sessions: [{type: Schema.Types.ObjectId, ref: 'session'}]
})

export default model('Hall', hallSchema)