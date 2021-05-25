const blogs = [
  { id: 1, name: "Nepal", population: 30000 },
  { id: 2, name: "India", population: 220000010010 },
];

export default function handler(req, res) {
  res.status(200).json(blogs);
}
