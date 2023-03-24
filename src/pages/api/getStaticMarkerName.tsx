import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: any, res: any) {
  const fileContents = await fs.readFile(
    process.cwd() + "/src/utils/markerNamesAndCoord.json",
    "utf8"
  );
  const fileContentsParsed = JSON.parse(fileContents);
  res.status(200).json(fileContentsParsed);
}
