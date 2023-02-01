import {buildSchema} from "graphql";

const filmSchema = buildSchema(`
  input FilmInput {
    name: String
    description: String
  }
  
  type FilmData {
    name: String!
    description: String!
  }
  
  type Query {
    getAllFilms: [FilmData]
    getOneFilm(id: ID!): FilmData
  }
  
  type Mutation {
    createFilm(input: FilmInput): FilmData    
    updateFilm(input: FilmInput): FilmData    
  }
`)

export default filmSchema