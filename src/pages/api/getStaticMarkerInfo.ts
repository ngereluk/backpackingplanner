import { StaticSiteInfo } from "@/utils/staticSiteInfo";
import { promises as fs } from "fs";
import { SiteInfoPanelData } from "../../types";

export default async function handler(req: any, res: any) {
  if (req.body.selectedMarker != undefined) {
    const markerData = StaticSiteInfo.filter(
      //@ts-ignore
      (markerInfo: SiteInfoPanelData) =>
        markerInfo.name === req.body.selectedMarker
    );
    if (markerData[0] !== undefined) {
      res.status(200).json(markerData[0]);
    } else return null;
  } else return null;
}
