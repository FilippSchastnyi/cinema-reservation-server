
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
  
  input InputQuery {
    page: Int
    limit: Int
    name: String
  }
  
  type FilmData {
    name: String
    description: String
    country: String
    director: String
    duration: String
    release: String 
    genres: [String]
    image: String
  }
  
  type Query {
    getAllFilms: [FilmData]
    getOneFilm(id: ID!): FilmData
    getCinemaFilms(input: InputQuery): [FilmData]
  }
  
  type Mutation {
    createFilm(input: FilmInput): FilmData    
    updateFilm(id:ID, input: FilmInput): FilmData   
  }
  
  scalar Upload
`

export default filmSchema