import {buildSchema} from "graphql";

const schema = buildSchema(`
  input filmInput {
    name: String,
    description: String,
    image: String
  }
  
  type filmData {
    name: String!,
    description: String!,
    image: String    
  }
  
  type Query {
    getAllFilms: [filmData]
    getOneFilm(id: ID!): filmData
  }
  
  type Mutation {
    createFilm(input: filmInput): filmData    
    createFilm(input: filmInput): filmData    
  }
`)

export default schema