import * as dotenv from 'dotenv'
import express from 'express';

import mongoose from "mongoose";
import combinedSchema from "./graphQL/combined.schema.js";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import {ApolloServer} from "apollo-server-express";
import cors from "cors";

dotenv.config()

const app = express();
app.use(cors())
const server = new ApolloServer({
  schema: combinedSchema,
});




async function startServer(){
  await mongoose.set('strictQuery', true).connect(process.env.DB_CONNECT)
  app.listen({ port: process.env.PORT }, async () =>{
    await server.start()
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    server.applyMiddleware({ app });
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  })
}

startServer().catch(e=>console.log(e))