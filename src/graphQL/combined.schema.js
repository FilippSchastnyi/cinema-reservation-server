import { makeExecutableSchema } from '@graphql-tools/schema'
/**   RESOLVERS   **/
import snackResolver from "./resolvers/snack.resolver.js";
import seatResolver from "./resolvers/seat.resolver.js";
import planResolver from "./resolvers/plan.resolver.js";
import hallResolver from "./resolvers/hall.resolver.js";
import filmResolver from "./resolvers/film.resolver.js";
import cinemaResolver from "./resolvers/cinema.resolver.js";
import storeResolver from "./resolvers/store.resolver.js";
import userResolver from "./resolvers/user.resolver.js";
/**   GRAPH_QL TYPES   **/
import userTypes from "./typeDefs/user.types.js";
import storeTypes from "./typeDefs/store.types.js";
import cinemaTypes from "./typeDefs/cinema.types.js";
import filmTypes from "./typeDefs/film.type.js";
import hallTypes from "./typeDefs/hall.types.js";
import planTypes from "./typeDefs/plan.type";
import seatTypes from "./typeDefs/seat.type.js";
import snackTypes from "./typeDefs/snack.types.js";

const combinedSchema = makeExecutableSchema({
    typeDefs: [
        userTypes,
        storeTypes,
        cinemaTypes,
        filmTypes,
        hallTypes,
        planTypes,
        seatTypes,
        snackTypes
    ],
    resolvers: [
        userResolver,
        storeResolver,
        cinemaResolver,
        filmResolver,
        hallResolver,
        planResolver,
        seatResolver,
        snackResolver
        ],
});

export default combinedSchema