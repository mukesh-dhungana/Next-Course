export default async (req, res) => {
    const { id } = req.query
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    const specificData = data.find(x => x.id + '' === id + '')
    res.status(200).json(specificData)
}