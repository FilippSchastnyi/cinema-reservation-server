import {Schema, model} from "mongoose";

const cinemaSchema = new Schema({
  name: {type:String, required: true },
  city: {type: Schema.Types.ObjectId, ref: 'city'},
  films: [{type: Schema.Types.ObjectId, ref: 'film'}],
  schedule: [{type: Schema.Types.ObjectId, ref: 'session'}],
  store: {type: Schema.Types.ObjectId, ref: 'store'},
  halls: [{type: Schema.Types.ObjectId, ref: 'halls'}],
})

export default model('Cinema', cinemaSchema)