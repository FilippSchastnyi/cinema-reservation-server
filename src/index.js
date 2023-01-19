import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {graphqlHTTP} from "express-graphql";
import cors from "cors"
import mongoose from "mongoose";
import combinedSchema from "./graphQL/combinedSchema.js";

const app = express()

app.use(cors()) // of course, we should think about security (*) - for developing period
app.use('/graphql', graphqlHTTP({
    graphiql: true, // switch the graphical interface on
    schema: combinedSchema,
}))

mongoose.set('strictQuery', true)
        .connect(process.env.DB_CONNECT)
    .then(() => {
    try {
        app.listen(process.env.PORT, 'localhost', 5, () => {
            console.log('The server has been started')
        })
    } catch (e) {
        console.log(e)
    }
})


