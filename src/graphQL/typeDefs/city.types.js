import {buildSchema} from "graphql"

const citySchema = buildSchema(`

  type CityData {
    name: String
  }
  
  input CityInput {
    name: String
  }
  
  type Query {
    getAllCities: [CityData]
    getOneCity(id: ID!): CityData
  }
  
  type Mutation{
    addCity(input: CityInput): CityData
  }
`)

export default citySchema