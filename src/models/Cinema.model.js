import {Schema, model} from "mongoose";

const cinemaSchema = new Schema({
  name: {type:String, required: true },
  city: {type: Schema.Types.ObjectId, ref: 'city'},
  films: [{type: Schema.Types.ObjectId, ref: 'film'}],
  halls: [{type: Schema.Types.ObjectId, ref: 'hall'}],
  store: {type: Schema.Types.ObjectId, ref: 'store'}
})

export default model('Cinema', cinemaSchema)