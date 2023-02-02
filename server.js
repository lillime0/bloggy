import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";
import { Post } from "./resolvers/Post.js";
import { User } from "./resolvers/User.js";
import { db } from "./db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Post, User },
  context: { db }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
