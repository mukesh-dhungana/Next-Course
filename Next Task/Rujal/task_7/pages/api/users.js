export default (req, res) => {
  res.status(200).json([
      { id: 1, username: 'Rujal', email: 'rujal@gmail.com', password: 'ruja123' },
      { id: 2, username: 'ram', email: 'ram@gmail.com', password: 'ram123' },
  ])
}
