import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type User {
    email: String
    password: String
  }
  
  input UserInput {
    email: String
    password: String
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
    registerUser(input: UserInput): User
    loginUser(input: UserInput): User
  }
`);

export default schema