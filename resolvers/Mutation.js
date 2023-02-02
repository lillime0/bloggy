import crypto from "node:crypto";
import { formatDate } from "../utils/formatDate.js";

export const Mutation = {
  addPost: (_, { input }, { db }) => {
    const { title, content, tag, userId } = input;

    const newPost = {
      id: crypto.randomUUID(),
      title,
      tag,
      content,
      userId,
      createdAt: formatDate()
    };
    db.posts.push(newPost);
    return newPost;
  },
  updatePost: (_, { id, input }, { db }) => {
    let index = db.posts.findIndex(post => post.id === id);
    if (index === -1) return null;

    db.posts[index] = { ...db.posts[index], ...input };
    return db.posts[index];
  },
  deletePost: (_, { id }, { db }) => {
    db.posts = db.posts.filter(post => post.id !== id);
    return true;
  }
};
