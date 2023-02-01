import {Schema, model} from "mongoose";

const filmSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  schedules: [{type: Schema.Types.ObjectId, ref: 'Schedule'}]
/*  image: {type: Buffer}*/
})

export default model('Film', filmSchema)