import {buildSchema} from "graphql";

const filmSchema = buildSchema(`
  input filmInput {
    name: String,
    description: String,
  }
  
  type filmData {
    name: String!,
    description: String!,
  }
  
  type Query {
    getAllFilms: [filmData]
    getOneFilm(id: ID!): filmData
  }
  
  type Mutation {
    createFilm(input: filmInput): filmData    
    updateFilm(input: filmInput): filmData    
  }
`)

export default filmSchema