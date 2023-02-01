import SeatController from '../controllers/Seat.controller.js'

const SeatResolver = {
  Query: {
    getOneSeat: SeatController.getOneSeat,
    getAllSeats: SeatController.getAllSeats,
  },
  Mutation: {
    createSeat: SeatController.createSeat,
    updateSeat: SeatController.updateSeat,
  }
}

export default SeatResolver