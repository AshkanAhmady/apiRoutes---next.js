export default function handler(req, res) {
  res.status(200).json({
    posts: [
      {
        title: "post 1",
        description: "description 1",
      },
      {
        title: "post 2",
        description: "description 2",
      },
    ],
  });
}
