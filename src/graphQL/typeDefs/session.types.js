import {buildSchema} from "graphql"

const sessionSchema = buildSchema(`

  scalar DateTime
  
  type Booking {
    row: Int
    seat: Int
  }
  
  type Seat {
    seatNumber: Int
    status: String
    isBusy: Boolean
  }
  
  type Row {
    rowNumber: Int
    seats: [Seat]
  }
  
  input BookingInput {
    row: Int
    seat: Int
  }
  
  input SeatInput {
    seatNumber: Int
    status: String
    isBusy: Boolean
  }
  
  input RowInput {
    rowNumber: Int
    seats: [SeatInput]
  }

  type SessionData {
    film: ID
    hall: ID
    showTime: DateTime
    booking: [Booking]
    plan: [Row]
  }
  
  input SessionInput {
    film: ID
    hall: ID
    showTime: DateTime
    booking: [BookingInput]
    plan: [RowInput]
  }
  
  type Query {
    getAllSessions: [SessionData]
    getOneSession(id: ID!): SessionData
  }
  
  type Mutation{
    createSession(input: SessionInput): SessionData
  }
`)

export default sessionSchema