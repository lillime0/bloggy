import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    posts(filter: PostsFilterInput): [Post!]!
    post(id: ID!): Post
    users: [User!]!
  }
  type Mutation {
    addPost(input: AddPostInput!): Post!
    deletePost(id: ID!): Boolean!
    updatePost(id: ID!, input: UpdatePostInput!): Post!
  }
  type Post {
    id: ID!
    title: String!
    tag: Tag!
    content: String!
    createdAt: String!
    user: User!
  }
  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }
  input AddPostInput {
    title: String!
    content: String!
    tag: Tag = GENERAL
    userId: String!
  }
  input UpdatePostInput {
    title: String!
    content: String!
    tag: Tag = GENERAL
  }
  input PostsFilterInput {
    userId: String
    tag: Tag
  }
  enum Tag {
    GENERAL
    QUESTION
    DISCUSSION
    INFO
    WARN
  }
`;
