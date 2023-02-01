import {buildSchema} from "graphql";

const seatSchema = buildSchema(`
  input SeatInput {
    name: String,
    type: String,
    isBusy: Boolean
  }
  
  type SeatData {
    name: String,
    type: String,
    isBusy: Boolean
  }
  
  type Query {
    getAllSeats: [SeatData]
    getOneSeat(id: ID!): SeatData
  }
  
  type Mutation {
    createSeat(input: SeatInput): SeatData    
    updateSeat(input: SeatInput): SeatData    
  }
`)

export default seatSchema