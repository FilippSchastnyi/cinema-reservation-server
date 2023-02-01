import FilmController from '../controllers/Film.controller.js'

const FilmResolver = {
  Query: {
    getOneFilm: FilmController.getFilm,
    getAllFilms: FilmController.getAllFilms,
  },
  Mutation: {
    createFilm: FilmController.createFilm,
    updateFilm: FilmController.updateFilm,
  }
}

export default FilmResolver