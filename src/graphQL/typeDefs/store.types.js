import {buildSchema} from "graphql";

const storeTypes = buildSchema(`
  scalar Upload
  
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
    goods: [GoodsData]
  } 
  
  input StoreInput {
    name: String
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

