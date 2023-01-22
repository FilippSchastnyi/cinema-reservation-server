import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type User {
    email: String
    password: String
    roles: [String]
  }
  
  input UserInput {
    email: String!
    password: String!
  }
  
  type DuplicatedUser {
    message: String
  }
  
  type EmptyUser {
    message: String
  }
  
  type UnexpectedError {
    message: String
  }
  
  type AuthUserData {
    roles: [String]
    token: String
    message: String
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): UserResult
    loginUser(input: UserInput): UserResult
  }
  
   union UserResult = AuthUserData | DuplicatedUser | UnexpectedError | EmptyUser
`);

export default schema