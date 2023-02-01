import {buildSchema} from "graphql";
//::TODO
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
    getAllSnacks: [filmData]
    getOneSnack(id: ID!): filmData
  }
  
  type Mutation {
    createSnack(input: filmInput): filmData    
    updateSnack(input: filmInput): filmData    
  }
`)

export default snackSchema