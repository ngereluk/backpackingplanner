import { StaticRouteData } from "../../utils/staticRouteData";

export default async function handler(req: any, res: any) {
  res.status(200).json(StaticRouteData);
}
