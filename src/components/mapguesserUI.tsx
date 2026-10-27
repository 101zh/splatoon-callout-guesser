import { useState } from 'react';
import MapSelector from './mapselector';
import MapDisplay from './mapdisplay';

export interface MapJsonEntry {
    name: string;
    key : string;
    imgName: string;
    regionNames: Record<string, string>
}

var curMap: MapJsonEntry | null = null;
var mapLocations: string[] | null = null;

export default function MapGuesserUI() {
    const [currentMapData, setCurrentMapData] = useState<{ mapInfo: MapJsonEntry } | null>(null);
    const [currentGuessRegion, setGuessRegion] = useState<{ callout: string } | null>(null);


    function handleMapClick(e: SVGPathElement | null) {
        if (e == null || currentGuessRegion == null || curMap == null || mapLocations == null) {
            console.log(e);
            // console.log(currentGuessRegion);
            // console.log(curMap);
            // console.log(mapLocations);

            return;
        }

        if (currentGuessRegion.callout == curMap.regionNames[e.id]) {
            var bounds = e.getBBox();
            var text = <text text-anchor="middle" dominant-baseline="middle" x="${bounds.x + bounds.width / 2}" y="${bounds.y + bounds.height / 2}">test</text>;
            setGuessRegion({ callout: mapLocations[Math.floor(mapLocations.length * Math.random())] });
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    }

    return <div>
        <MapSelector onMapChange={(data) => {
            setCurrentMapData(data);
            if (data != null) {
                mapLocations = Object.values(data.mapInfo.regionNames);
                setGuessRegion({ callout: mapLocations[Math.floor(mapLocations.length * Math.random())] });
            }
        }} />
        <Location guessInfo={currentGuessRegion}></Location>
        <MapDisplay onMapClick={(e) => handleMapClick(e)} data={currentMapData} />
    </div>
}

interface LocationProps {
    guessInfo: { callout: string } | null;
}

export function Location({ guessInfo }: LocationProps) {
    if (guessInfo == null) {
        return;
    }

    return <div>Guess where {guessInfo.callout} is</div>;
}


