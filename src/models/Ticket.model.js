import {Schema, model} from "mongoose";

const ticketSchema = new Schema({
    tickets: [
      {
        status: {type: String, enum: ['VIP', 'STANDARD'], required: true},
        price: {type: Number, required: true}
      }
    ]
  })

export default model('Ticket', ticketSchema)