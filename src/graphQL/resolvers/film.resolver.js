import FilmController from '../controllers/Film.controller.js'

const FilmResolver = {
  Query: {
    getOneFilm: FilmController.getOneFilm,
    getAllFilms: FilmController.getAllFilms,
    getCinemaFilms: FilmController.getCinemaFilms,
  },
  Mutation: {
    createFilm: FilmController.createFilm,
    updateFilm: FilmController.updateFilm,
  }
}

export default FilmResolver