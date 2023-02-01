import UserController from '../controllers/User.controller.js'

const userResolver = {
  Query: {
    getOneUser: UserController.getOneUser,
    getAllUsers: UserController.getAllUsers,
  },
  Mutation: {
    logInUser: UserController.logInUser,
    createUser: UserController.createUser,
    }
}

export default userResolver