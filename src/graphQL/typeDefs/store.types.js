import {buildSchema} from "graphql";

const storeTypes = buildSchema(`
  
  type Ticket {
    type: String
    price: Float
  }
  
  input TicketInput {
    type: String
    price: Float
  }
  
  type GoodsData {
    name: String
    price: Float
    count: Int
  }
  
  input GoodsInput {
    name: String
    price: Float
    count: Int
  }
  
  type StoreData {
    name: String
    tickets: [Ticket]
    goods: [GoodsData]
  } 
  
  input StoreInput {
    name: String
    tickets: [TicketInput]
    goods: [GoodsInput]
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

