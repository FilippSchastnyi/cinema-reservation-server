import CinemaController from '../controllers/Cinema.controller.js'

const CinemaResolver = {
  Query: {
    getOneCinema: CinemaController.getOneCinema,
    getAllCinemas: CinemaController.getAllCinemas,
  },
  Mutation: {
    createCinema: CinemaController.createCinema,
    updateCinema: CinemaController.updateCinema,
  }
}

export default CinemaResolver