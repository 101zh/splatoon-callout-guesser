import { useState, type MouseEvent } from 'react';
import MapSelector from './mapselector';
import MapDisplay from './mapdisplay';
import type { RegionProps } from './svg';

export interface MapJsonEntry {
    name: string;
    key: string;
    imgName: string;
    regionNames: Record<string, string>
}

export default function MapGuesserUI() {
    const [currentMapData, setCurrentMapData] = useState<{ mapInfo: MapJsonEntry } | null>(null);
    const [mapCalloutPool, setMapCalloutPool] = useState<{ regionKeys: string[] } | null>(null)
    const [currentCalllout, setCallout] = useState<{ key: string, name: string } | null>(null);

    function handleMapClick(nextPathAttrs: RegionProps[], clickData: MouseEvent<SVGPathElement, globalThis.MouseEvent>, index: number) {
        if (clickData == null || currentCalllout == null || currentMapData == null || mapCalloutPool == null) {
            console.log("Invalid data");

            return;
        }
        var regionKeys = mapCalloutPool.regionKeys.slice();

        if (currentCalllout.key == nextPathAttrs[index].id) {
            nextPathAttrs[index].fill = "rgb(0,255,0)";

            for (let i = 0; i < regionKeys.length; i++) {
                if (regionKeys[i] == currentCalllout.key) {
                    regionKeys = regionKeys.toSpliced(i, 1);
                }
            }

            // Add text on top of region when clicked
        } else {
            for (let i = 0; i < nextPathAttrs.length; i++) {
                if (nextPathAttrs[i].id == currentCalllout.key) {
                    nextPathAttrs[i].fill = "rgb(255,0,0)";

                    // Add text on top of region when clicked
                }
            }

            for (let i = 0; i < regionKeys.length; i++) {
                if (regionKeys[i] == currentCalllout.key) {
                    regionKeys = regionKeys.toSpliced(i, 1);
                }
            }
        }

        var key = regionKeys[Math.floor(regionKeys.length * Math.random())]

        if (regionKeys.length == 0) {
            key = ""
        }

        console.log(regionKeys)
        // console.log("new key: " + key);
        // console.log("new name: " + currentMapData.mapInfo.regionNames[key]);

        setCallout({
            key: key,
            name: currentMapData.mapInfo.regionNames[key]
        });
        setMapCalloutPool({ regionKeys })
    }

    return <div>
        <MapSelector onMapChange={(data) => {
            setCurrentMapData(data);
            if (data != null) {
                var regionKeys = Object.keys(data.mapInfo.regionNames);
                var key = regionKeys[Math.floor(regionKeys.length * Math.random())]

                setCallout({
                    key: key,
                    name: data.mapInfo.regionNames[key]
                });
                setMapCalloutPool({ regionKeys });
            }
        }} />
        <Location callout={currentCalllout}></Location>
        <MapDisplay onRegionClick={handleMapClick} data={currentMapData} />
    </div>
}

interface LocationProps {
    callout: { key: string, name: string } | null;
}

export function Location({ callout }: LocationProps) {
    if (callout == null) {
        return;
    }

    if (callout.key == "") {
        return <div>Congrats! You've finished guessing.</div>
    }

    return <div>Where is {callout.name}?</div>;
}


