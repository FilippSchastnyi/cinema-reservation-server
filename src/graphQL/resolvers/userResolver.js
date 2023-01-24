import * as dotenv from 'dotenv'

dotenv.config()
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import UserModel from "../../models/UserModel.js";

async function getComparedResult(promiseCb) {
  let isTrue = false
  await promiseCb.then(res => isTrue = res)
  return isTrue
}

async function arePasswordsMatch(password, hash) {
  return bcrypt.compare(password, hash)
}

async function areEmailAddressesMatch(model, email) {
  return model.findOne({email}).then(result => !!result)
}

async function generateToken(id, roles, response){
  const payload = {id, roles}
  const token = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'})
  response.setHeader('Authorization', `Bearer ${token}`)
}

function userError(message) {
  return {
    __typename: 'AccessDenied',
    message: message
  }
}

function getUserData(roles, user_id, email) {
  return {
    __typename: "UserData",
    message: "Success",
    roles,
    user_id,
    email
  }
}


const userResolver = {
  Query: {
    async getAllUsers() {
      return UserModel.find();
    },
    async getUser(_, {id}) {
      return UserModel.findById(id);
    },
  },
  Mutation: {
    async loginUser(_, {input}, {res}) {
      const {email, password} = input

      if (!await getComparedResult(areEmailAddressesMatch(UserModel, email))) {
        return userError(`User with ${email} doesn't exist`)
      }

      const user = await UserModel.findOne({email})

      if (!await getComparedResult(arePasswordsMatch(password, user.password))) {
        return userError('Incorrect password')
      }

      await generateToken(user._id, user.roles, res)
      return getUserData(user.roles, user._id, user.email)
    },
    async createUser(_, {input}, {res}) {
      const {email, password} = input

      if ( await getComparedResult(areEmailAddressesMatch(UserModel, email))) {
        return userError(`User with ${email} is already in use`)
      }

      const hashedPassword = await bcrypt.hash(password, 5).then(result => result)
      const roles = ["USER"]

      return await UserModel.create({email, password: hashedPassword, roles})
        .then(data => {
          generateToken(data._id, roles, res)
          return getUserData(data.roles, data._id, data.email)
        }, () => {
          return userError("User hasn't been saved")
        })
    },
  },
}

export default userResolver