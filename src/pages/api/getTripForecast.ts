import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    req.body.trailHeadLat +
    "," +
    req.body.trailHeadLong +
    "/" +
    req.body.formattedStartDate +
    "/" +
    req.body.formattedEndDate +
    "?key=N47S4WN9992K6JJ5FH8R74D9N&unitGroup=metric";

  const apiResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const forecast = await apiResponse.json();
  res.status(200).json(forecast);
}
