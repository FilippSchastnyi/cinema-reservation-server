import {buildSchema} from "graphql";

const storeTypes = buildSchema(`
  scalar Upload
  
  enum SeatStatus {
    VIP
    STANDARD
  }
    
  type Ticket {
    status: SeatStatus
    price: Float
  }
  
  input TicketInput {
    status: SeatStatus
    price: Float
  }
  
  type GoodsData {
    name: String
    image: String
    price: Float
    count: Int
  }
  
  input GoodsInput {
    storeId: ID!
    name: String
    image: Upload
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
    createGoods(input: GoodsInput): GoodsData
  }
`)

export default storeTypes

