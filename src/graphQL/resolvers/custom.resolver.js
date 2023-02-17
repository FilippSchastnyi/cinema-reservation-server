import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import {GraphQLDateTime} from "graphql-scalars";


const customResolvers = {
  Upload: GraphQLUpload,
  DateTime: GraphQLDateTime,
}

export default customResolvers