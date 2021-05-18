export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "Blog 1",
      body: "Blog1 Body",
    },
    {
      id: 2,
      title: "Blog 2",
      body: "Blog2 Body",
    },
    {
      id: 3,
      title: "Blog 3",
      body: "Blog3 Body",
    },
    {
      id: 4,
      title: "Blog 4",
      body: "Blog4 Body",
    },
    {
      id: 5,
      title: "Blog 5",
      body: "Blog5 Body",
    },
  ]);
};
