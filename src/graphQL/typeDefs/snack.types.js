import {buildSchema} from "graphql";

const snackSchema = buildSchema(`
 type SnackData {
    name:String,
    price:String,
    count: Int
 }
 
 input SnackInput {
    name:String,
    price:String,
    count: Int
 }
 
  type Query {
    getAllSnacks: [SnackData]
    getOneSnack(id: ID!): SnackData
  }
  
  type Mutation {
    createSnack(input: SnackInput): SnackData    
    updateSnack(input: SnackInput): SnackData    
  }
`)

export default snackSchema