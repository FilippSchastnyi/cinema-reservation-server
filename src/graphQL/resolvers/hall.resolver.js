import HallController from '../controllers/Hall.controller.js'

const HallResolver = {
  Query: {
    getOneHall: HallController.getOneHall,
    getAllCinemaHalls: HallController.getAllCinemaHalls,
  },
  Mutation: {
    createHall: HallController.createHall,
    updateHall: HallController.updateHall,
  }
}

export default HallResolver