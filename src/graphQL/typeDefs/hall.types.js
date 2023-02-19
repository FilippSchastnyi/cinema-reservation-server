import {buildSchema} from "graphql";

const hallSchema = buildSchema(`

  scalar DateTime

  type Seat {
    seatNumber: Int
    status: String
    isBusy: Boolean
  }
  
  input SeatInput {
    seatNumber: Int
    status: String
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
    startTime: DateTime
  }
  
  type hallData {
    _id: ID
    name: String!
    plan: [Row]
    schedule: [showTime]
  }
  
  type cinemaHall {
    cinemaName: String,
    halls: [hallData]
  }
  
  input hallInput {
    name: String!
    plan: [RowInput]
    sessions: [ID]
  }
  
  type Query {
    getAllHalls(cinemaId: ID!): cinemaHall
    getOneHall(id: ID!): hallData
  }
  
  type Mutation{
    createHall(input: hallInput): hallData
    updateHall(id: ID!, input: hallInput): hallData
  }
`)

export default hallSchema