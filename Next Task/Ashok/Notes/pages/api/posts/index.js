// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let posts = [
  {
    id: 1,
    title: "post 1",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nostrum atque cum, neque tenetur, in magnam debitis autem quas, molestiae inventore ab voluptates aliquam suscipit maiores corrupti quam est sapiente!  ",
    author: "Ram Gopal Verma",
  },
  {
    id: 2,
    title: "post 2",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nostrum atque cum, neque tenetur, in magnam debitis autem quas, molestiae inventore ab voluptates aliquam suscipit maiores corrupti quam est sapiente!  ",
    author: "Lalita Bannerji",
  },
];

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(posts);
      break;
    case "POST":
      posts.push(req.body);
      res.status(200).json({ msg: "Added post done" });
      break;
    case "PUT":
      posts = posts.map((post) => (post.id === req.body.id ? req.body : post));
      res.status(200).json({ msg: "Edit post done" });
      break;
    case "DELETE":
      posts = posts.filter((post) => post.id !== +req.query.id);
      res.status(200).json({ msg: "Delete post done" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};
