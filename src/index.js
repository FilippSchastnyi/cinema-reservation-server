import express from 'express'
import {graphqlHTTP} from "express-graphql";
import cors from "cors"
import userSchema from "./schema/graphQL/user-schema.js";

const app = express()
app.use(cors()) // of course, we should think about security (*) - for developing period

const root = {} // resolver, an object contains functions

app.use('/graphql', graphqlHTTP({
    graphiql: true, // switch the graphical interface on
    schema: userSchema,
    rootValue: root
}))

app.listen(4000, 'localhost',5,()=>{
    console.log('The server has been started')
})