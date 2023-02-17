import {Schema} from "mongoose";

const seatSchema = new Schema({
  seatNumber: {type: Number, required: true},
  isBusy: {type: Boolean, required: true},
  status: {type: ['VIP', 'STANDARD'], required: true}
})

export default seatSchema