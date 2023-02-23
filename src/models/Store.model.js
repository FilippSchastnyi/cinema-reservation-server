import {model, Schema} from "mongoose";

const storeSchema = new Schema({
  name: {type: String, required: true},
  tickets: [{
    type: {type: String},
    price: {type: Number, required: true}
  }],
  goods: [{
    name: String,
    price: {type: Number, required: true},
    count: Number
  }],
})

export default model('Store', storeSchema)