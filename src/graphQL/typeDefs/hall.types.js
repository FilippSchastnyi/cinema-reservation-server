import {buildSchema} from "graphql";

const hallSchema = buildSchema(`

  scalar DateTime
  
  enum SeatStatus {
    VIP
    STANDARD
  }

  type Seat {
    seatNumber: Int
    status: SeatStatus
    isBusy: Boolean
  }
  
  input SeatInput {
    seatNumber: Int
    status: SeatStatus
    isBusy: Boolean 
  }
  
  type Row {
    rowNumber: Int
    seats: [Seat]
  }
  
  input RowInput {
    rowNumber: Int
    seats: [SeatInput]
  }
  
  type showTime {
    _id: ID
    showTime: DateTime
  }
  
  type hallData {
    _id: ID
    name: String!
    plan: [Row]
    schedule: [showTime]
  }
  
  input hallInput {
    name: String!
    plan: [RowInput]
    schedule: [ID]
  }
  
  type Query {
    getAllCinemaHalls(cinemaId: ID!): [hallData]
    getOneHall(id: ID!): hallData
  }
  
  type Mutation{
    createHall(input: hallInput): hallData
    updateHall(id: ID!, input: hallInput): hallData
  }
`)

export default hallSchema