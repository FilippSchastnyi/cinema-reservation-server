import {buildSchema} from "graphql";

const storeTypes = buildSchema(`
  
  type StoreData {
    tickets: [Ticket]
    snacks: [Snack]
  } 
  
  type Ticket {
    film: ID
    price: String
  }
  
  type Snack {
    snack: ID
    price: String
  }
  
  input StoreInput {
    tickets: [TicketInput]
    snacks: [SnackInput],
  } 
  
  input TicketInput {
    film: ID
    price: String
  }
  
  input SnackInput {
    snack: ID
    price: String
  }
  
  type Query {
    getAllStores: [StoreData]
    getOneStore(id: ID!): StoreData
  }
  
  type Mutation{
    createStore(input: StoreInput): StoreData
    updateStore(id: ID!, input: StoreInput): StoreData
  }
`)

export default storeTypes

