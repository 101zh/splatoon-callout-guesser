import maps from "../assets/maps.json";
import { type MapJsonEntry } from "./mapguesserUI";

const splat3MapImageDir: string = "../assets/splat3/splat3maps/";
const splat3SVGDir: string = "../assets/splat3mapsSVG/";

interface MapSelectorProps {
    onMapChange: (mapData: { imagePath: string; svgPath: string; mapInfo: MapJsonEntry }) => void;
}

export default function MapSelector({ onMapChange }: MapSelectorProps) {

    function getImage(mapSelector: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) {
        const selectedKey = mapSelector.target.value;
        if (selectedKey == "" || selectedKey == null) return;

        const mapInfo = maps[selectedKey as keyof typeof maps] as MapJsonEntry;

        if (mapInfo) {
            const imagePath = splat3MapImageDir + mapInfo.imgName;
            const svgPath = splat3SVGDir + mapInfo.svgName;

            onMapChange({ imagePath, svgPath, mapInfo });
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
