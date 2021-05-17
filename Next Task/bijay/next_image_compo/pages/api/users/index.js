export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Man 1",
      avatar_url: "https://avatars.githubusercontent.com/u/59993093?v=4",
      email: "man1@gmail.com",
      login: "man1",
    },
    {
      id: 2,
      name: "Man 2",
      avatar_url: "https://avatars.githubusercontent.com/u/59993093?v=4",
      email: "man2@gmail.com",
      login: "man1",
    },
    {
      id: 3,
      name: "Man 3",
      avatar_url: "https://avatars.githubusercontent.com/u/59993093?v=4",
      email: "man3@gmail.com",
      login: "man1",
    },
  ]);
};
