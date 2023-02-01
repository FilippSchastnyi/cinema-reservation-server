import HallController from '../controllers/Hall.controller.js'

const HallResolver = {
  Query: {
    getOneHall: HallController.getOneHall,
    getAllHalls: HallController.getAllHalls,
  },
  Mutation: {
    createHall: HallController.createHall,
    updateHall: HallController.updateHall,
  }
}

export default HallResolver