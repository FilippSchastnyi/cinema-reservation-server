import CinemaController from '../controllers/Cinema.controller.js'

const CinemaResolver = {
  Query: {
    getCinema: CinemaController.getCinema,
    getAllCinemas: CinemaController.getAllCinemas,
  },
  Mutation: {
    logInCinema: CinemaController.logInCinema,
    createCinema: CinemaController.createCinema,
  }
}

export default CinemaResolver