import {buildSchema} from "graphql";

const storeTypes = buildSchema(`
  type storeData {
    tickets: [
      film:{id:ID}
      price:String
    ],
    snacks: [
      snack:{id:ID}
      price:String
    ], 
  } 
  
  input storeInput {
    tickets: [
      film:{id:ID}
      price:String
    ],
    snacks: [
      snack:{id:ID}
      price:String
    ], 
  } 
  
  type Query {
    getAllStores(): [StoreData]
    getOneStore(id: ID!): StoreData
  }
  
  type Mutation{
    createStore(input: storeInput): storeData
    updateStore(id: ID!, input: storeInput): storeData
  }

`)

export default storeTypes

