export default function handler(req, res) {
  // this query have all querys
  // method of this request in (GET)
  console.log(req.method);

  const { query } = req;
  res.status(200).json({
    postId: query.postId,
  });
}
