export const User = {
  posts: ({ id }, _, { db }) => db.posts.filter(post => post.userId === id)
};
