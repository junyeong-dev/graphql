import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: `type Movie {
      id: Int!
      title: String!
      rating: Float
      description_intro: String
      language: String
      medium_cover_image: String
      genres: [String]
    }
    
    type Query {
      movies(limit: Int, rating: Float): [Movie]!
      movie(id: Int!): Movie
      suggestions(id: Int!): [Movie]!
    }
    `,
    resolvers
  });

// schema는 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명
server.start(() => console.log("Graphql Server"));

