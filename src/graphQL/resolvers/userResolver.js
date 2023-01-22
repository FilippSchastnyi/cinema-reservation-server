import * as dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import UserModel from "../../models/UserModel.js";

async function generateToken({id, roles}) {
  const payload = {id, roles}
  return await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'});
}

const userResolver = {
  Query: {
    async loginUser(_, {input}) {
      const {email, password} = input
      const user = await UserModel.findOne({email})
      if (!user){
        return {
          __typename:'EmptyUser',
          message: `User with ${email} doesn't exist`
        }
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password)
      if (!isPasswordMatch){
        return {
          __typename: "AccessDenied",
          message: "Incorrect password"
        }
      }
      const token = generateToken({id: user._id, roles: user.roles})
      return {
        __typename: "AuthUserData",
        message: "Success",
        user: {
          email,
          password,
          roles: user.roles
        },
        token
      }
    },
    async getAllUsers() {
      return UserModel.find();
    },
    async getUser(_, {id}) {
      return UserModel.findById(id);
    },
  },
  Mutation: {
    async createUser(_, {input}) {
      return UserModel.create(input);
    },

    async registerUser(_, {input}) {
      const {email, password} = input

      if (await UserModel.findOne({email})) {
        return {
          __typename: 'DuplicatedUser',
          message: 'Email is duplicated',
        }
      }

      const hashedPassword = await bcrypt.hash(password, 5).then(result => result)
      const roles = ["USER"]
      const newUser = await UserModel.create({email, password: hashedPassword, roles})
        .then(data => {
          const token = generateToken({id: data._id, roles})
          return {
            __typename: "AuthUserData",
            message: "User has been registered",
            user: {
              email,
              password,
              roles
            },
            token
          }
        }, () => {
          return {
            __typename: "UnexpectedError",
            message: "User hasn't been saved",
          }
        })
      return newUser
    },
  },
}

export default userResolver