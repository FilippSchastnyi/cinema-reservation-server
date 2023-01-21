import * as dotenv from 'dotenv'

dotenv.config()
import UserSchema from "../../models/UserSchema.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

async function isEmailDuplicated(email) {
  return await UserSchema.countDocuments({email}) > 0
}

async function generateToken(payload) {
  return await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'});
}

const userResolver = {
  Query: {
    async getAllUsers() {
      return UserSchema.find();
    },
    async getUser(_, {id}) {
      return UserSchema.findById(id);
    },
  },
  Mutation: {
    async createUser(_, {input}) {
      return UserSchema.create(input);
    },

    async registerUser(_, {input}) {
      const {email, password} = input

      if (await isEmailDuplicated(email)) {
        return {
          __typename: 'DuplicatedUser',
          message: 'Email is duplicated',
        }
      }

      const hashedPassword = await bcrypt.hash(password, 5).then(result => result)
      const newUserData = {email, hashedPassword}
      const token = await generateToken(newUserData)
      UserSchema.create(newUserData); //::TODO
      return {
        __typename: "RegisteredUser",
        message: "User has been registered",
        user: {
          email,
          password: hashedPassword,
        },
        token
      }
    },

    async loginUser(_, {input}) {
      // if exist?
      // error if not
      // if entered pass match the encrypted
      // error if not

      // create new Token

      // update token
    }
  },
}

export default userResolver