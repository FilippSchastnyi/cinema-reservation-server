import {model, Schema} from "mongoose";

const storeSchema = new Schema({
  name: {type: String, required: true},
  tickets: [{
    status: {type: String, enum: ['VIP', 'STANDARD'], required: true},
    price: {type: Number, required: true}
  }],
  goods: [{
    name: String,
    price: {type: Number, required: true},
    image: {type: String, required: true},
    count: Number
  }],
})

export default model('Store', storeSchema)