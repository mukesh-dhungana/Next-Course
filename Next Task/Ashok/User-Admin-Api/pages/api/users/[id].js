const users = [
  {
    id: 1,
    name: "Ashok",
    username: "ashokganika",
    website: "ashok@ganika.com",
    phone: 3232322,
    street: "London",
  },
  {
    id: 2,
    name: "Man",
    username: "Mankumar",
    website: "man@kuamr.com",
    phone: 43343343,
    street: "Paris",
  },
];

export default (req, res) => {
  const user = users.find((user) => user.username === req.query.id) || {};
  res.status(200).json({ ...user });
};
