import UserModel from "../../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorController from "./Error.controller.js"

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

function userSuccessFormat(access_token, roles, user_id, email) {
  return {
    __typename: "UserData",
    message: "Success",
    access_token,
    roles,
    user_id,
    email,
  }
}

class UserController {
  async logInUser(_, {input}) {
    const {email, password} = input

    if (!(await doesEmailExist(UserModel, email))) {
      return ErrorController.userError.UNKNOWN_EMAIL;
    }

    const user = await UserModel.findOne({email})

    if (!(await comparePasswords(password, user.password))) {
      return ErrorController.userError.INCORRECT_PASSWORD;
    }
    const token = await generateToken(user._id, user.roles)
    return userSuccessFormat(token, user.roles, user._id, user.email)
  }

  async createUser(_, {input}, {res}) {
    const {email, password} = input
    const roles = ["USER"]

    if (await doesEmailExist(UserModel, email)) {
      return ErrorController.userError.DUPLICATED_EMAIL
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    return await UserModel.create({email, password: hashedPassword, roles})
      .then(user => {
        const token = generateToken(user._id, user.roles)
        return userSuccessFormat(token, user.roles, user._id, user.email)
      })
      .catch(() => {
        return ErrorController.userError.UNEXPECTED_ERROR
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