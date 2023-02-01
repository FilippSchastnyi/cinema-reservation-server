import {Schema, model} from "mongoose";

const hallSchema = new Schema({
  name: {type: String, required: true},
  size: {type: Number, required: true},
  plan: {type: Schema.Types.ObjectId, ref: 'Plan', require: true},
  schedule: {type: Schema.Types.ObjectId, ref: 'Schedule'}
})