export const Post = {
  user: ({ userId }, _, { db }) => db.users.find(user => user.id === userId)
};
