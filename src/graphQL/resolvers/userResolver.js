import UserController from '../controllers/User.controller.js'

const userResolver = {
  Query: {
    /** USER **/
    getUser: UserController.getUser,
    getAllUsers: UserController.getAllUsers,
  },
  Mutation: {
    /** USER **/
    logInUser: UserController.logInUser,
    createUser: UserController.createUser,
    }
}

export default userResolver