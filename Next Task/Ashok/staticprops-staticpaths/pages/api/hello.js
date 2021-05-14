// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  { id: 1, name: "ashok" },
  { id: 2, name: "Max" },
  { id: 3, name: "Jennifer" },
  { id: 4, name: "Jennifer" },
  { id: 5, name: "Jennifer" },
  { id: 6, name: "Jennifer" },
  { id: 7, name: "Jennifer" },
  { id: 8, name: "Jennifer" },
  { id: 8, name: "Jennifer" },
  { id: 8, name: "Jennifer" },
];

export default (req, res) => {
  res.status(200).json({ users });
};
