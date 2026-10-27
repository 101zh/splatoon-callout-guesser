import MAP_INFO from "../assets/MapInfo.json";
import type { MapJsonEntry } from "./mapguesserUI";

interface MapSelectorProps {
    onMapChange: (mapData: { mapInfo: MapJsonEntry } | null) => void;
}

export default function MapSelector({ onMapChange }: MapSelectorProps) {

    function onChange(mapSelector: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) {
        const selectedKey = mapSelector.target.value;
        if (!(selectedKey in MAP_INFO)) { onMapChange(null); return; }

        const mapInfo = MAP_INFO[selectedKey as keyof typeof MAP_INFO] as MapJsonEntry;

        onMapChange({ mapInfo });
    }

    return <>
        <label>
            {"Map: "}
            <select onChange={(e) => onChange(e)}>
                <option value="">-- Select a map --</option>
                {
                    Object.entries(MAP_INFO).map(([key, value]) => (
                        <option key={key} value={key}>{value.name}</option>
                    ))
                }
            </select>
        </label>
    </>
}
