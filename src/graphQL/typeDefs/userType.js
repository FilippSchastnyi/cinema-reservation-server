import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type User {
    email: String
    password: String
  }
  
  input UserInput {
    email: String!
    password: String!
  }
  
  type DuplicatedUser {
    message: String
  }
  
  type RegisteredUser {
    user: User
    token: String
    message: String
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): UserResult
    registerUser(input: UserInput): UserResult
    loginUser(input: UserInput): User
  }
  
   union UserResult = RegisteredUser | DuplicatedUser
`);

export default schema