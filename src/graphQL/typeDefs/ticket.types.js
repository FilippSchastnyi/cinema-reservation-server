import {buildSchema} from "graphql";

const ticketTypes = buildSchema(`
  
  enum ticketVariant {
    VIP
    STANDARD
  }
    
  type TicketData {
    status: ticketVariant
    price: Float
  }
  
  input TicketInput {
    status: ticketVariant
    price: Float
  }
 

  input UpdateTicketInput {
    cinemaId: ID!
    ticket: TicketInput
  }
  
  type Mutation{
    createTicketGroup(input: [TicketInput]): [TicketData]
    updateTicketPrice(input: UpdateTicketInput): [TicketData]
  }
`)

export default ticketTypes

