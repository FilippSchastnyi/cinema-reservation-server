import UserSchema from "../../models/UserSchema.js";

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

        async registerUser(_, {input}){
            // check old user

            // throw Error if so

            // encrypt password

            // build mongoose model

            // create JWT

            // save user
        },

        async loginUser(_, {input}){
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