import {buildSchema} from "graphql"

const cinemaSchema = buildSchema(`

  type GenreData {
    _id: ID,
    name: String
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
    halls: [ID]
  }
  
  input CinemaInput {
    name: String
    city: ID
    films: [ID]
    halls: [ID]
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