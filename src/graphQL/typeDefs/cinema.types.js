import {buildSchema} from "graphql"

const cinemaSchema = buildSchema(`

  type cinemaData {
    name: String
    city: String
    halls: [id:ID]
    store: [id: ID]
  }
  
  input cinemaInput {
    name: String!
    city: String!
    halls: [id:ID]
    store: [id: ID]
  }
  
  type Query {
    getAllCinemas(): [cinemaData]
    getOneCinema(id: ID!): cinemaData
  }
  
  type Mutation{
    createCinema(input: cinemaInput): cinemaData
    updateCinema(id: ID!, input: cinemaInput): cinemaData
  }
`)

export default cinemaSchema