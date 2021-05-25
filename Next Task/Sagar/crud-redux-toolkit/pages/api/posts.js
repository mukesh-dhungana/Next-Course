const posts = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is Blog 1",
    user: "User 1",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is Blog 2",
    user: "User 2",
  },
];

function handler(req, res) {
  res.status(200).json({ posts });
}

export default handler;
