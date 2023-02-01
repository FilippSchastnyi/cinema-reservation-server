import UserController from '../controllers/User.controller.js'

const userResolver = {
  Query: {
    getUser: UserController.getUser,
    getAllUsers: UserController.getAllUsers,
  },
  Mutation: {
    logInUser: UserController.logInUser,
    createUser: UserController.createUser,
    }
}

export default userResolver