// to get data of this endPoit we should go to (http://localhost:3000/api) address
// default method is (GET)
export default function handler(req, res) {
  res.status(200).json({ name: "Ashkan" });
}
