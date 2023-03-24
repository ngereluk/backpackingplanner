import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "fs/promises";

export default async function orsApiHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "https://api.openrouteservice.org/v2/directions/foot-hiking/geojson";
  const ormResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      coordinates: req.body.coordinates,
      elevation: "true",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: "5b3ce3597851110001cf62487304b26a75f24a8cb943fa137eb6a204",
    },
  });

  const geojsonObject = await ormResponse.json();

  //  await writeFile("./file.json", JSON.stringify(geojsonObject));

  res.status(200).json({
    geojsonObject: geojsonObject,
  });
}
