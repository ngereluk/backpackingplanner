import { promises as fs } from "fs";
import { SiteInfoPanelData } from "../../pages/types";

export default async function handler(req: any, res: any) {
  if (req.body.selectedMarker != undefined) {
    const fileContents = await fs.readFile(
      process.cwd() + "/src/utils/staticSiteInfo.json",
      "utf8"
    );
    const fileContentsParsed = JSON.parse(fileContents);
    const markerData = fileContentsParsed.filter(
      (markerInfo: SiteInfoPanelData) =>
        markerInfo.name === req.body.selectedMarker
    );
    if (markerData[0] !== undefined) {
      res.status(200).json(markerData[0]);
    } else return null;
  } else return null;
}
