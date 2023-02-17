import {Schema} from "mongoose";
import seatSchema from "./Seat.schema.js";

const rowSchema = new Schema({
      rowNumber: {type: Number, required: true},
      seats: {type: [seatSchema], required: true}
})

export default rowSchema