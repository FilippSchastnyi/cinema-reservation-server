import {model, Schema} from "mongoose";

const seatSchema = new Schema({
  name: {type: Number, required: true},
  type: ['vip', 'normal'], required: true,
  isBusy: {type: Boolean, required: true},
})

export default model('Seat', seatSchema)