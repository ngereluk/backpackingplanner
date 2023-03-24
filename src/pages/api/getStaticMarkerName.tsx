import { MarkerNamesAndCoord } from "../../utils/markerNamesAndCoord";

export default async function handler(req: any, res: any) {
  res.status(200).json(MarkerNamesAndCoord);
}
