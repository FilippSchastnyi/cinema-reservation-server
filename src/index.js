import * as dotenv from 'dotenv'
import mongoose from "mongoose";
import combinedSchema from "./graphQL/combined.schema.js";
import {ApolloServer} from "@apollo/server";
import express from "express";
import http from 'http';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {expressMiddleware} from "@apollo/server/express4";
import bodyParser from "express";
import cors from "cors";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
dotenv.config()
  /**
   * Required logic for integrating with Express
   **/
const app = express();
  /**
   * Our httpServer handles incoming requests to our Express app.
   * Below, we tell Apollo Server to "drain" this httpServer,
   * enabling our servers to shut down gracefully.
   **/
const httpServer = http.createServer(app);
  /**
   * ApolloServer initialization.
   **/
const server = new ApolloServer({
  schema: combinedSchema,
  csrfPrevention: false,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
  /**
   * This middleware should be added before calling `server.start();
   * to be able to get formData format,
   * it's important!`.
   **/
app.use(graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}));
  /**
   * Start the server with our settings`.
   **/
await server.start();
  /**
   * Set up our Express middleware to handle CORS, body parsing,`
   * and our expressMiddleware function.
   **/
app.use('/',
  cors(),
  /**
   * set 50mb body limit
   **/
  bodyParser.json({limit: '50mb'}),
  /**
   * If we want to send any values to be able
   * to work with them into resolvers
   **/
  expressMiddleware(server, {
    context: async ({req}) => ({token: req.headers.token}),
  }),
);
  /**
   * Just a port for develop condition and default one
   **/
const port = process.env.PORT || 4000
  /**
   * Connect to the mongo database
   * and start the server with middlewares
   * on the board
   **/
async function startServer() {
  await mongoose.set('strictQuery', true).connect(process.env.DB_CONNECT)
  await httpServer.listen({port})
  console.log('The server has been started on the ' + port + ' PORT, Happy hacking >:D')
}
  /**
   * If something went wrong
   **/
  startServer().catch(e => console.log(e))