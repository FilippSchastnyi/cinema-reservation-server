import {buildSchema} from "graphql";

const planSchema = buildSchema(`
  input planInput {
    seats: [[{id: ID}]]
  }
  
  type planData {
    seats: [[{id: ID}]]
  }
  
  type Query {
    getAllPlans: [planData]
    getOnePlan(id: ID!): planData
  }
  
  type Mutation {
    createPlan(input: planInput): planData    
    updatePlan(input: planInput): planData    
  }
`)

export default planSchema