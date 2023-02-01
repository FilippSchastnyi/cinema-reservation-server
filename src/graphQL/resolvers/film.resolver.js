import FilmController from '../controllers/Film.controller.js'

const FilmResolver = {
  Query: {
    getFilm: FilmController.getFilm,
    getAllFilms: FilmController.getAllFilms,
  },
  Mutation: {
    logInFilm: FilmController.logInFilm,
    createFilm: FilmController.createFilm,
  }
}

export default FilmResolver