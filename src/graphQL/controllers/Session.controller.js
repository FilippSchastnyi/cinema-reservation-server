import SessionModel from "../../models/Session.model.js";
import HallModel from "../../models/Hall.model.js";

class SessionController {
  async createSession(_, {input}) {
    console.log(input)
    return SessionModel.create(input);
  }

  async updateSession() {

  }

  async getAllSessions() {

  }

  async getOneSession(_, {id}) {
    const session = await SessionModel.findOne({_id: id}).populate("hall", "plan name", HallModel)
    const hallPlan = session.hall.plan
    const bookingList = session.booking

    const sessionPlan = hallPlan.map((hallRow) => {
      const isRowBooked = bookingList.some(booking => booking.row === hallRow.rowNumber)
      if (!isRowBooked) return hallRow

      const currentRowHallSeats = hallRow.seats
      const currentRowBookedSeats = bookingList.find(booking => booking.row === hallRow.rowNumber).seats
      const currentRowSessionSeats = currentRowHallSeats.map(hallSeat => {
        const isSeatBooked = currentRowBookedSeats.includes(hallSeat.seatNumber)
        return isSeatBooked
          ? {...hallSeat.toObject(), isBusy: true}
          : hallSeat
      })
      return {
        ...hallRow.toObject(),
        seats: currentRowSessionSeats
      }
    })

    return {
      hallName: session.hall.name,
      hall: sessionPlan,
      showTime: session.showTime,
      booking: bookingList
    }
  }
}

export default new SessionController()
