import {Schema, model} from "mongoose";

const cinemaSchema = new Schema({
  name: {type:String, required: true },
  city: {type:String, required: true },
  halls: [{type: Schema.Types.ObjectId, ref: 'Hall', required: true}],
  snacks: [{type: Schema.Types.ObjectId, ref: 'Snack'}]
})

export default model('Cinema', cinemaSchema)