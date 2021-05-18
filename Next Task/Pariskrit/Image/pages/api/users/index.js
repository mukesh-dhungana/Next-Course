import { users } from "../../../data";

export default function handle(req, res) {
  res.status(200).json(users);
}
