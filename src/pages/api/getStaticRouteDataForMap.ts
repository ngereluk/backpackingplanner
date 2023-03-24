import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: any, res: any) {
  const fileContents = await fs.readFile(
    process.cwd() + "/public/staticRouteData.json",
    "utf8"
  );
  res.status(200).json(fileContents);
}
