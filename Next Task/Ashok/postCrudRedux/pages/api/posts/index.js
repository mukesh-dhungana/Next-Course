// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const posts = [
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
  res.status(200).json(posts);
};
