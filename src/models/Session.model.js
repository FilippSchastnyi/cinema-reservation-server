import {Schema, model} from "mongoose";

const sessionSchema = new Schema({
  hall: {type: Schema.Types.ObjectId, ref: 'hall', require: true},
  showTime: {type: Date, require: true},
  booking: [{
    row: {type: Number},
    seats: [{type: Number}]
  }],
})

export default model("Session", sessionSchema)