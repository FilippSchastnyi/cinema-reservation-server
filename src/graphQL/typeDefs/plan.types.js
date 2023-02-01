import {buildSchema} from "graphql";

const planSchema = buildSchema(`
  input PlanInput {
    seats: [[ID]]
  }
  
  type PlanData {
    seats: [[ID]]
  }
  
  type Query {
    getAllPlans: [PlanData]
    getOnePlan(id: ID!): PlanData
  }
  
  type Mutation {
    createPlan(input: PlanInput): PlanData    
    updatePlan(input: PlanInput): PlanData    
  }
`)

export default planSchema