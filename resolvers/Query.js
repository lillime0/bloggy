export const Query = {
  posts: (_, { filter }, { db }) => {
    let filteredPosts = db.posts;
    if (filter) {
      const { userId, tag } = filter;
      if (tag) filteredPosts = filteredPosts.filter(post => post.tag === tag);
      if (userId)
        filteredPosts = filteredPosts.filter(post => post.userId === userId);
    }
    return filteredPosts;
  },
  post: (_, { id }, { db }) => db.posts.find(post => post.id === id),
  users: (_, __, { db }) => db.users
};
