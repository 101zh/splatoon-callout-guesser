import { type MouseEvent } from "react";
import type { MapJsonEntry } from "./mapguesserUI";
import { MAP_REGIONS } from "../assets/MapRegions";
import MapSVG, { type RegionProps } from "./svg";

const importedImages = import.meta.glob('../assets/splat3/splat3maps/*.png', { eager: true }) as Record<string, { default: string }>;

const splat3MapImageDir: string = "../assets/splat3/splat3maps/";

interface MapDisplayProps {
    data: {
        mapInfo: MapJsonEntry;
    } | null;
    onRegionClick: (nextPathAttrs: RegionProps[], clickData: MouseEvent<SVGPathElement, globalThis.MouseEvent>, index: number) => void;
}

export default function MapDisplay({ onRegionClick, data }: MapDisplayProps) {
    if (data == null) {
        return <p>Please select a map from the dropdown.</p>;
    }

    const curMap = data.mapInfo;
    const imagePath = splat3MapImageDir + data.mapInfo.imgName;

    const imageStr = importedImages[imagePath].default;

    return <div>
        <img
            src={imageStr}
            alt={"Map of " + curMap["name"]}
            className='absolute'
        />
        <MapSVG
            className="absolute"
            calloutRegions={MAP_REGIONS[data.mapInfo.key]}
            onRegionClick={onRegionClick}
        />
    </div>
}