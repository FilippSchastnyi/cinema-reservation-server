import {Schema, model} from "mongoose";

const filmSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  genres: [{type: Schema.Types.ObjectId, required: true, ref: "Genre"}]
/*  image: {type: Buffer} or store pictures on the server into the static folder ? ::TODO*/
})

export default model('Film', filmSchema)