import {Schema, model} from "mongoose";
import rowSchema from "./schemas/Row.schema.js";

const hallSchema = new Schema({
  name: {type: String, required: true},
  plan: [rowSchema],
  schedule: [{type: Schema.Types.ObjectId, ref: 'session'}],
  tickets: {type: Schema.Types.ObjectId, ref: 'ticket'},
})

export default model('Hall', hallSchema)