const users = [
  {
    id: 1,
    name: "Ashok",
    username: "ashokganika",
    website: "ashok@ganika.com",
    phone: 3232322,
    street: "London",
    image: "https://avatars.githubusercontent.com/u/23138426?v=4",
  },
  {
    id: 2,
    name: "Man",
    username: "Mankumar",
    website: "man@kuamr.com",
    phone: 43343343,
    street: "Paris",
    image: "https://avatars.githubusercontent.com/u/7760502?v=4",
  },
];

export default (req, res) => {
  const user = users.find((user) => user.username === req.query.id) || {};
  res.status(200).json({ ...user });
};
