import {Schema, model} from "mongoose";
import rowSchema from "./schemas/Row.schema.js";

const sessionSchema = new Schema({
  film: {type: Schema.Types.ObjectId, ref: 'film'},
  hall: {type: Schema.Types.ObjectId, ref: 'hall', require: true},
  showTime: {type: Date, require: true},
  booking: [{
    row: {type: Number},
    seat: {type: Number}
  }],
  plan: [rowSchema],
})

export default model("Session", sessionSchema)