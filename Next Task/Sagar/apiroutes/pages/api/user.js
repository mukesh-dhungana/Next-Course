import fs from "fs";
import path from "path";

export function buildDataPath() {
  return path.join(process.cwd(), "data", "userDetail.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  const filePath = buildDataPath();
  const data = extractData(filePath);
  res.status(201).json({ userDetail: data });
}

export default handler;
