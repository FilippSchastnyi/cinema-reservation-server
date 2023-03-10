import {Schema} from "mongoose";

const seatSchema = new Schema({
  seatNumber: {type: Number, required: true},
  isBusy: {type: Boolean, required: true},
  status: {type: String, enum: ['VIP', 'STANDARD'], required: true},
  ticket: {type: Schema.Types.ObjectId, ref:"ticket"}
})

export default seatSchema