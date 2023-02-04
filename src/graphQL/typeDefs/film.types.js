
const filmSchema = `
  scalar Upload

  input FilmInput {
    name: String
    description: String
    country: String
    director: String
    duration: String
    release: String 
    genres: [ID]
    image: Upload
  }
  
  type FilmData {
    name: String
    description: String
    country: String
    director: String
    duration: String
    release: String 
    genres: [ID]
    image: String
  }
  
  type Query {
    getAllFilms: [FilmData]
    getOneFilm(id: ID!): FilmData
  }
  
  type Mutation {
    createFilm(input: FilmInput): FilmData    
    updateFilm(id:ID, input: FilmInput): FilmData    
  }
  
  scalar Upload
`

export default filmSchema