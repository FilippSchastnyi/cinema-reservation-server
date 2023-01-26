import * as dotenv from 'dotenv'

dotenv.config()
import mongoose from "mongoose";
import combinedSchema from "./graphQL/combinedSchema.js";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const server = new ApolloServer({
  schema: combinedSchema,
});

async function startServer(){
await mongoose.set('strictQuery', true).connect(process.env.DB_CONNECT)
const {url} = await startStandaloneServer(server, {
  listen: {port: process.env.PORT},
  context: async ({ req, res }) => {
    return { req, res };
  },
})
console.log(`🚀  Server ready at: ${url}`);
}

startServer().catch(e=>console.log(e))



