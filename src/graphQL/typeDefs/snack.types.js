import {buildSchema} from "graphql";

const snackSchema = buildSchema(`
 type snackData {
    name:String,
    price:String,
    count: Number
 }
 
 input snackInput {
    name:String,
    price:String,
    count: Number
 }
 
  type Query {
    getAllSnacks: [snackData]
    getOneSnack(id: ID!): snackData
  }
  
  type Mutation {
    createSnack(input: snackInput): snackData    
    updateSnack(input: snackInput): snackData    
  }
`)

export default snackSchema