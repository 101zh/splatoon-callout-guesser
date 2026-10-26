import { type MouseEvent } from "react";
import type { MapJsonEntry } from "./mapguesserUI";

const importedImages = import.meta.glob('../assets/splat3/splat3maps/*.png', { eager: true }) as Record<string, { default: string }>;
const importedSVGs = import.meta.glob("../assets/splat3mapsSVG/*.tsx", { eager: true, query: "?react", import: 'default' });

interface MapDisplayProps {
    data: {
        imagePath: string;
        svgPath: string;
        mapInfo: MapJsonEntry;
    } | null;
    onMapClick: (clickData: SVGPathElement | null ) => void;
}

export default function MapDisplay({ onMapClick, data }: MapDisplayProps) {
    if (!data) {
        return <p>Please select a map from the dropdown.</p>;
    }

    const curMap = data.mapInfo;

    const imageStr = importedImages[data.imagePath].default;
    const MapSVG = importedSVGs[data.svgPath] as React.ComponentType<React.SVGProps<SVGSVGElement>>;


    function handleClick(e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) {
        const path = (e.target as HTMLElement).closest("path");

        onMapClick(path);
    }

    return <div>
        <img
            src={imageStr}
            alt={"Map of " + curMap["name"]}
            className='absolute'
        />
        <div></div>
        <MapSVG onClick={(e) => handleClick(e)} className='absolute'></MapSVG>
    </div>
}