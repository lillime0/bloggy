import { gql } from "@apollo/client";

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
export const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $tag: Tag
    $content: String!
    $userId: String!
  ) {
    addPost(
      input: { title: $title, tag: $tag, content: $content, userId: $userId }
    ) {
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

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $tag: Tag, $content: String!) {
    updatePost(
      id: $id
      input: { title: $title, tag: $tag, content: $content }
    ) {
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
