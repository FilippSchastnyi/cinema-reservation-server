import {buildSchema} from "graphql"
import filmSchema from "film.type.js"

const schema = buildSchema(`

  type cinemaData {
    name: String
    city: String
    films: [filmSchema.filmData]
  }

  type Hall {
    name: String!
    capacity: Int!
  }
  
  input cinemaInput {
    name: String
    city: String
    films: [filmSchema.filmData]
  }
  
  type Query {
    getAllCinema(): Cinema
    getOneCinema(id: ID!): Cinema
  }
  
  type Mutation{
    createCinema(input: cinemaInput): cinemaData
    updateCinema(id: ID!, input: CinemaInput): cinemaData
  }
`)