import {Schema, model} from "mongoose";

const planSchema = new Schema({
  seats: [[{type: Schema.Types.ObjectId, ref: 'Seat'}]]
})

export default model('Plan', planSchema)