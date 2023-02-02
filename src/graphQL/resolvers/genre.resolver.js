import GenreController from '../controllers/Genre.controller.js'

const GenreResolver = {
  Query: {
    getOneGenre: GenreController.getOneGenre,
    getAllGenres: GenreController.getAllGenres,
  },
  Mutation: {
    createGenre: GenreController.createGenre,
    updateGenre: GenreController.updateGenre,
  }
}

export default GenreResolver