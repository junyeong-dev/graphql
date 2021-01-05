import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

// schema는 사용자에게 보내거나 사용자로부처 받을 data에 대한 설명
server.start(() => console.log("Graphql Server"));