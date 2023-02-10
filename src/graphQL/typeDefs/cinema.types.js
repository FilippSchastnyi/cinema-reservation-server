import {buildSchema} from "graphql"

const cinemaSchema = buildSchema(`

  type CinemaData {
    _id:ID
    name: String
    city: ID
    films: [ID]
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