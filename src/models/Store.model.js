import {model, Schema} from "mongoose";

const storeSchema = new Schema({
  name: {type: String, required: true},
  tickets: [{
    film: {type: Schema.Types.ObjectId, ref:'Film'},
    price: {type: String, required: true}
  }],
  snacks: [{
    snack: {type: Schema.Types.ObjectId, ref:'Snack'},
    price: {type: String, required: true}
  }],
})

export default model('Store', storeSchema)