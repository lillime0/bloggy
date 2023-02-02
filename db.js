const posts = [
  {
    id: "1",
    title: "First post",
    tag: "INFO",
    content: "Just posting my first post :)",
    userId: "1",
    createdAt: "Dec 12, 2022"
  },
  {
    id: "2",
    title: "Vote",
    tag: "QUESTION",
    content: "What do u think about this project?",
    userId: "3",
    createdAt: "Dec 12, 2022"
  },
  {
    id: "3",
    title: "Apollo GraphQL",
    tag: "GENERAL",
    content:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quidem aliquam neque fugit tenetur sed similique rerum sint quod quia? Totam enim libero facilis impedit beatae vitae, consectetur sit porro Odit eum laborum rem beatae",
    userId: "2",
    createdAt: "Dec 12, 2022"
  },
  {
    id: "4",
    title: "Breaking news!",
    tag: "WARN",
    content: "It's dangerous outside, blah blah blah...",
    userId: "1",
    createdAt: "Dec 12, 2022"
  }
];

const users = [
  {
    id: "1",
    name: "Lilli"
  },
  {
    id: "2",
    name: "Sara"
  },
  {
    id: "3",
    name: "Mohamed"
  }
];

export const db = {
  posts,
  users
};
