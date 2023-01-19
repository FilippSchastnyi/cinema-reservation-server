import { makeExecutableSchema } from '@graphql-tools/schema'
import userType from "./typeDefs/userType.js";
import userResolver from "./resolvers/userResolver.js";

const combinedSchema = makeExecutableSchema({
    typeDefs: [
        userType
    ],
    resolvers: [
            userResolver
        ],
});

export default combinedSchema