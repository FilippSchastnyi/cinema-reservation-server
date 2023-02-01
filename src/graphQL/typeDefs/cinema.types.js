import {buildSchema} from "graphql"

const cinemaSchema = buildSchema(`

  type CinemaData {
    name: String
    city: String
    halls: [ID]
    store: [ID]
  }
  
  input CinemaInput {
    name: String!
    city: String!
    halls: [ID]
    store: [ID]
  }
  
  type Query {
    getAllCinemas: [CinemaData]
    getOneCinema(id: ID!): CinemaData
  }
  
  type Mutation{
    createCinema(input: CinemaInput): CinemaData
    updateCinema(id: ID!, input: CinemaInput): CinemaData
  }
`)

export default cinemaSchema