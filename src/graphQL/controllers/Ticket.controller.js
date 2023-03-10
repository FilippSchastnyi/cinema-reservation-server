import TicketModel from "../../models/Ticket.model.js";

class TicketController {

  async createTicketGroup(_, {input}){
    const tickets = await TicketModel.create({tickets: input})
    return input
  }

  async updateTicketPrice(_, {input}) {
    const {TicketId, ticket} = input
    const updatedTicket = await TicketModel.updateOne({_id: TicketId, tickets: {$elemMatch: {status: ticket.status}}}, {$set:{'tickets.$.price': ticket.price}})
    if (updatedTicket.modifiedCount === 1) {
      const updatedTickets = await TicketModel.findOne({_id: TicketId})
      return updatedTickets.tickets
    }
  }
}

export default new TicketController()
