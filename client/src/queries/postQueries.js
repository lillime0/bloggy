import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts($filter: PostsFilterInput) {
    posts(filter: $filter) {
      id
      title
      tag
      content
      createdAt
      user {
        id
        name
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      tag
      content
      createdAt
      user {
        id
        name
      }
    }
  }
`;
