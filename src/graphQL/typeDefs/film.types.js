
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
  
  type GenreData {
    _id: ID,
    name: String
  }
  
  type FilmData {
    _id:ID
    name: String
    description: String
    country: String
    director: String
    duration: String
    release: String 
    genres: [GenreData]
    image: String
  }
  
  type CinemaFilmData {
    films: [FilmData],
    documentsCount: Int
  }
  
  type Query {
    getAllFilms: [FilmData]
    getOneFilm(id: ID!): FilmData
    getCinemaFilms(input: InputQuery): CinemaFilmData
  }
  
  type Mutation {
    createFilm(input: FilmInput): FilmData    
    updateFilm(id:ID, input: FilmInput): FilmData   
  }
  
  scalar Upload
`

export default filmSchema