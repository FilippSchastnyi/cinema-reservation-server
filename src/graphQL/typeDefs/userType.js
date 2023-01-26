import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type UserData {
    email: String
    user_id: String
    message: String
    roles: [String]
    access_token: String
  }
  
  input UserInput {
    email: String!
    password: String!
  }
  
  type AccessDenied {
    message: String
  }
  
  type UnexpectedError {
    message: String
  }

  type Query {
    getAllUsers: [UserData]
    getUser(id: ID!): UserData
  }

  type Mutation {
    createUser(input: UserInput): UserResult
    loginUser(input: UserInput): UserResult
  }
  
   union UserResult = UserData | UnexpectedError | AccessDenied
`);

export default schema