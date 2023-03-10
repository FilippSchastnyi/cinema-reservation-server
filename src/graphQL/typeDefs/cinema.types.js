import {buildSchema} from "graphql"

const cinemaSchema = buildSchema(`

  type GenreData {
    _id: ID,
    name: String
  }
    
  enum SeatStatus {
    VIP
    STANDARD
  }
  
  type Ticket {
    status: SeatStatus
    price: Float
  }
  
  type GoodsData {
    _id: ID
    name: String
    image: String
    price: Float
    count: Int
  }
  
  type StoreData {
    name: String
    tickets: [Ticket]
    goods: [GoodsData]
  } 

  type FilmData {
    _id:ID
    name: String
    description: String
    country: String
    director: String
    duration: String
    release: String 
    genres: [GenreData]
    image: String
  }

  type CinemaData {
    _id:ID
    name: String
    city: String
    films: [FilmData]
    schedule: [ID]
    store: StoreData
  }
  
  input CinemaInput {
    name: String
    city: ID
    films: [ID]
    schedule: [ID]
    store: ID
  }
  
  type Query {
    getAllCinemas: [CinemaData]
    getOneCinema(id: ID!): CinemaData
  }
  
  type Mutation {
    createCinema(input: CinemaInput): CinemaData
    updateCinema(id: ID!, input: CinemaInput): CinemaData
  }
`)

export default cinemaSchema