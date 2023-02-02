import {makeExecutableSchema} from '@graphql-tools/schema'
/**   RESOLVERS   **/
import userResolver from "./resolvers/user.resolver.js";
import cinemaResolver from "./resolvers/user.resolver.js";
import storeResolver from "./resolvers/store.resolver.js";
import filmResolver from "./resolvers/film.resolver.js";
import hallResolver from "./resolvers/hall.resolver.js";
import planResolver from "./resolvers/plan.resolver.js";
import seatResolver from "./resolvers/seat.resolver.js";
import snackResolver from "./resolvers/snack.resolver.js";
import genreResolver from "./resolvers/genre.resolver.js";
/**   GRAPH_QL TYPES   **/
import userTypes from "./typeDefs/user.types.js";
import cinemaTypes from "./typeDefs/cinema.types.js";
import storeTypes from "./typeDefs/store.types.js";
import filmTypes from "./typeDefs/film.types.js";
import hallTypes from "./typeDefs/hall.types.js";
import planTypes from "./typeDefs/plan.types.js";
import seatTypes from "./typeDefs/seat.types.js";
import snackTypes from "./typeDefs/snack.types.js";
import genreTypes from "./typeDefs/genre.types.js";


const combinedSchema = makeExecutableSchema({
  typeDefs: [
    userTypes,
    cinemaTypes,
    storeTypes,
    filmTypes,
    hallTypes,
    planTypes,
    seatTypes,
    snackTypes,
    genreTypes
  ],
  resolvers: [
    userResolver,
    cinemaResolver,
    storeResolver,
    filmResolver,
    hallResolver,
    planResolver,
    seatResolver,
    snackResolver,
    genreResolver
  ],
});

export default combinedSchema