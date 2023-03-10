import {makeExecutableSchema} from '@graphql-tools/schema'
/**   RESOLVERS   **/
import userResolver from "./resolvers/user.resolver.js";
import cinemaResolver from "./resolvers/cinema.resolver.js";
import storeResolver from "./resolvers/store.resolver.js";
import filmResolver from "./resolvers/film.resolver.js";
import snackResolver from "./resolvers/snack.resolver.js";
import genreResolver from "./resolvers/genre.resolver.js";
import customResolvers from "./resolvers/custom.resolver.js";
import cityResolver from "./resolvers/city.resolver.js";
import sessionResolver from "./resolvers/session.resolver.js";
import hallResolver from "./resolvers/hall.resolver.js";

/**   GRAPH_QL TYPES   **/
import userTypes from "./typeDefs/user.types.js";
import cinemaTypes from "./typeDefs/cinema.types.js";
import storeTypes from "./typeDefs/store.types.js";
import filmTypes from "./typeDefs/film.types.js";
import snackTypes from "./typeDefs/snack.types.js";
import genreTypes from "./typeDefs/genre.types.js";
import cityTypes from "./typeDefs/city.types.js";
import sessionTypes from "./typeDefs/session.types.js";
import hallTypes from "./typeDefs/hall.types.js";
import ticketTypes from "./typeDefs/ticket.types.js";
import ticketResolver from "./resolvers/ticket.resolver.js";

const combinedSchema = makeExecutableSchema({
  typeDefs: [
    userTypes,
    cinemaTypes,
    storeTypes,
    filmTypes,
    snackTypes,
    genreTypes,
    cityTypes,
    sessionTypes,
    hallTypes,
    ticketTypes
  ],
  resolvers: [
    customResolvers,
    userResolver,
    cinemaResolver,
    storeResolver,
    filmResolver,
    snackResolver,
    genreResolver,
    cityResolver,
    sessionResolver,
    hallResolver,
    ticketResolver
  ],
});

export default combinedSchema