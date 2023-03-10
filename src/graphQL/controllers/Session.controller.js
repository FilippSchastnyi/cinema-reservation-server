import SessionModel from "../../models/Session.model.js";
import HallModel from "../../models/Hall.model.js";
import TicketModel from "../../models/Ticket.model.js";

class SessionController {
  async createSession(_, {input}) {
    return SessionModel.create(input);
  }

  async updateSession() {

  }

  async getAllSessions() {

  }

  async getOneSession(_, {id}) {
    const session = await SessionModel.findById(id)
      .populate({
        path: 'hall',
        select: 'name plan',
        model: HallModel,
        populate: {
          path: 'tickets',
          model: TicketModel,
        },
      })
      .lean();

    const originalHall = session.hall.plan
    const bookingList = session.booking
    const { tickets } = session.hall.tickets;

    const updateSeatsPrice=(seat, tickets)=>{
      const ticket = tickets.find((ticket) => ticket.status === seat.status);
      const price = ticket ? ticket.price : null;
      return {...seat, price};
    }

    const updateSeatsState=(seat, bookedSeatsList)=>{
      const isSeatBooked = bookedSeatsList.includes(seat.seatNumber)
      return isSeatBooked
        ? {...seat, isBusy: true}
        : seat
    }

    const sessionPlan = originalHall.map((originalRow) => {
      const sessionSeats = originalRow.seats.map(seat => updateSeatsPrice(seat, tickets))
      const sessionRow = {...originalRow, seats: sessionSeats}
      const isRowHasBookedSeats = bookingList.some(booking => booking.row === sessionRow.rowNumber)

      if (!isRowHasBookedSeats) return sessionRow

      const bookedSeats = bookingList.find(booking => booking.row === sessionRow.rowNumber).seats
      const sessionWithBookedSeats = sessionSeats.map(seat => {
        let processSeat = {...seat}
        processSeat = updateSeatsState(processSeat, bookedSeats)
        return processSeat
      })

      return {
        ...sessionRow,
        seats: sessionWithBookedSeats
      }
    })

    return {
      location: session.hall.name,
      schema: sessionPlan,
      showTime: session.showTime,
      booking: bookingList
    }
  }
}

export default new SessionController()
