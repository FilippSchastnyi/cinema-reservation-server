import { makeExecutableSchema } from '@graphql-tools/schema'
import userType from "./typeDefs/user.types.js";
import userResolver from "./resolvers/user.resolver.js";

const combinedSchema = makeExecutableSchema({
    typeDefs: [
        userType
    ],
    resolvers: [
            userResolver
        ],
});

export default combinedSchema