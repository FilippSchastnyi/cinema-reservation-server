import UserModel from "../../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorHandlerController from "./Error.controller.js"
import error from "../../constants/error.js";


async function doesEmailExist(model, email) {
  return model.findOne({ email }).then((result) => !!result);
}

async function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}

async function generateToken(id, roles) {
  const payload = {id, roles}
  return await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
  getUserSuccessFormat(roles, user_id, email, token){
    return {
      __typename: "UserData",
      message: "Success",
      access_token: token,
      roles,
      user_id,
      email
    }
  }

  async logInUser(_, {input}) {
    const {email, password} = input

    if (!(await doesEmailExist(UserModel, email))) {
      return ErrorHandlerController.userErrorHandler(error.UNKNOWN_EMAIL);
    }

    const user = await UserModel.findOne({email})

    if (!(await comparePasswords(password, user.password))) {
      return ErrorHandlerController.userErrorHandler(error.INCORRECT_PASSWORD);
    }

    const token = await generateToken(user._id, user.roles)

    return this.getUserSuccessFormat(user.roles, user._id, user.email, token)
  }

  async createUser(_, {input}, {res}) {
    const {email, password} = input
    const roles = ["USER"]

    if (await doesEmailExist(UserModel, email)) {
      return ErrorHandlerController.userErrorHandler(error.DUPLICATED_EMAIL)
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    return await UserModel.create({email, password: hashedPassword, roles})
      .then(data => {
        const token = generateToken(data._id, roles)
        return this.getUserSuccessFormat(data.roles, data._id, data.email, token)
      })
      .catch(() => {
        return ErrorHandlerController.userErrorHandler(error.UNEXPECTED_ERROR)
      })
  }

  async getUser(_, {id}) {
    return UserModel.findById(id);
  }

  async getAllUsers() {
    return UserModel.find();
  }
}

export default new UserController()