import {buildSchema} from "graphql"

const sessionSchema = buildSchema(`

  scalar DateTime
  
  enum SeatStatus {
    VIP
    STANDARD
  }
  
  type Booking {
    row: Int
    seats: [Int]
  }
  
  input BookingInput {
    row: Int
    seats: [Int]
  }
  
  type Seat {
    _id: ID
    seatNumber: Int
    status: SeatStatus
    isBusy: Boolean
    price: Float
  }
  
  type Row {
    rowNumber: Int
    seats: [Seat]
  }

  type SessionData {
    location: String
    schema: [Row]
    showTime: DateTime
    booking: [Booking]
  }
  
  input SessionInput {
    hall: ID
    showTime: DateTime
    booking: [BookingInput]
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