export default (req, res) => {
    res.status(200).json(
        [
            { id: 1, name: 'Rujal', image_url: 'https://avatars.githubusercontent.com/u/23138426?v=4', email: "rujal@gmail.com" },
            { id: 2, name: "Raj", image_url: 'https://avatars.githubusercontent.com/u/55077982?v=4', email: "raj@gmail.com" },
            { id: 3, name: 'Saurav', image_url: 'https://avatars.githubusercontent.com/u/7760502?v=4', email: "saurav@gmail.com" }
        ]
    )
}