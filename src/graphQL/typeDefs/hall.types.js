import {buildSchema} from "graphql";

const hallSchema = buildSchema(`

  type hallData {
    name: String!
    size: Int
    plan: [ID]
  }
  
  input hallInput {
    name: String!
    size: Int
    plan: [ID]
  }
  
  type Query {
    getAllHalls: [hallData]
    getOneHall(id: ID!): hallData
  }
  
  type Mutation{
    createHall(input: hallInput): hallData
    updateHall(id: ID!, input: hallInput): hallData
  }
`)

export default hallSchema