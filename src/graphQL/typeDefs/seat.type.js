import {buildSchema} from "graphql";

const seatSchema = buildSchema(`
  input seatInput {
    name: String,
    type: String,
    isBusy: Boolean
  }
  
  type seatData {
    name: String,
    type: String,
    isBusy: Boolean
  }
  
  type Query {
    getAllSeats: [seatData]
    getOneSeat(id: ID!): seatData
  }
  
  type Mutation {
    createSeat(input: seatInput): seatData    
    updateSeat(input: seatInput): seatData    
  }
`)

export default seatSchema