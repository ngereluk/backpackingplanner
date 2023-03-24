import { StaticRouteData } from "../../utils/staticRouteData";

export default async function handler(req: any, res: any) {
  let segmentLength = 0;
  let segmentGrossElevation = 0;
  for (let staticRoute of StaticRouteData) {
    if (
      staticRoute.geoJson.metadata.query.coordinates[0][0] === req.body[0][0] &&
      staticRoute.geoJson.metadata.query.coordinates[0][1] === req.body[0][1] &&
      staticRoute.geoJson.metadata.query.coordinates[1][0] === req.body[1][0] &&
      staticRoute.geoJson.metadata.query.coordinates[1][1] === req.body[1][1]
    ) {
      segmentLength =
        staticRoute.geoJson.features[0].properties.segments[0].distance;
      segmentGrossElevation = staticRoute.geoJson.features[0].properties.ascent;
    }
  }

  res.status(200).json({
    segmentLength: segmentLength,
    segmentGrossElevation: segmentGrossElevation,
  });
}
