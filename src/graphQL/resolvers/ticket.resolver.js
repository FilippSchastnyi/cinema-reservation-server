import TicketController from '../controllers/Ticket.controller.js'

const TicketResolver = {
  Mutation: {
    updateTicketPrice: TicketController.updateTicketPrice,
    createTicketGroup: TicketController.createTicketGroup,
  }
}

export default TicketResolver