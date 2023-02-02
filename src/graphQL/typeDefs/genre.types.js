import {buildSchema} from "graphql";

const genreSchema = buildSchema(`

  type GenreData {
    name: String!
  }
  
  input GenreInput {
    name: String!
  }
  
  type Query {
    getAllGenres: [GenreData]
    getOneGenre(id: ID!): GenreData
  }
  
  type Mutation{
    createGenre(input: GenreInput): GenreData
    updateGenre(id: ID!, input: GenreInput): GenreData
  }
`)

export default genreSchema