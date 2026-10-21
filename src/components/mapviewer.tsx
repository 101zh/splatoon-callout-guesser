import { useState, type MouseEvent } from 'react';
import maps from "../assets/maps.json";

const importedImages = import.meta.glob('../assets/splat3/splat3maps/*.png', { eager: true }) as Record<string, { default: string }>;
const importedSVGs = import.meta.glob("../assets/splat3mapsSVG/*.svg", { eager: true, query: "?react", import: 'default' });
const splat3MapImageDir: string = "../assets/splat3/splat3maps/";
const splat3SVGDir: string = "../assets/splat3mapsSVG/";

interface MapJsonEntry {
    name: string;
    imgName: string;
    svgName: string;
    regions: Record<string, string>
}

export default function MapViewer() {
    const [currentMapData, setCurrentMapData] = useState<{ imagePath: string; svgPath: string; mapKey : string } | null>(null);

    return <div>
        <MapSelector onMapChange={(data) => { setCurrentMapData(data) }} />
        <MapDisplay data={currentMapData} />
    </div>
}

interface MapDisplayProps {
    data: {
        imagePath: string;
        svgPath: string;
        mapKey: string;
    } | null;
}

export function MapDisplay({ data }: MapDisplayProps) {
    if (!data) {
        return <p>Please select a map from the dropdown.</p>;
    }

    const curMap = maps[data.mapKey as keyof typeof maps];

    const imageStr = importedImages[data.imagePath].default;
    const MapSVG = importedSVGs[data.svgPath] as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    function handleClick(e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>){
        const path = (e.target as HTMLElement).closest("path");

        console.log(path);
        console.log(path?.id);
        console.log(curMap["regions"][path?.id as keyof typeof curMap["regions"]]);
    }

    return <div>
        <img
            src={imageStr}
            alt={"Map of " + curMap["name"]}
            className='absolute'
        />
        <MapSVG onClick={(e) => handleClick(e)} className='absolute'></MapSVG>
    </div>

}

interface MapSelectorProps {
    onMapChange: (mapData: { imagePath: string; svgPath: string; mapKey: string }) => void;
}

export function MapSelector({ onMapChange }: MapSelectorProps) {

    function getImage(mapSelector: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) {
        const selectedKey = mapSelector.target.value;
        if (selectedKey == "" || selectedKey == null) return;

        const mapEntry = maps[selectedKey as keyof typeof maps] as MapJsonEntry;

        if (mapEntry) {
            const imagePath = splat3MapImageDir + mapEntry.imgName;
            const svgPath = splat3SVGDir + mapEntry.svgName;

            onMapChange({ imagePath, svgPath, mapKey: selectedKey });
        }
    }

    return <>
        <label>
            Map:
            <select onChange={(e) => getImage(e)}>
                <option value="">-- Select a map --</option>
                {
                    Object.entries(maps).map(([key, value]) => (
                        <option key={key} value={key}>{value.name}</option>
                    ))
                }
            </select>
        </label>
    </>
}
