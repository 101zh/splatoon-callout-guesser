import { useState, type MouseEvent, type SVGProps } from "react";

export interface RegionProps extends SVGProps<SVGPathElement> {
    id: string;
}

export interface MapSVGProps {
    calloutRegions: RegionProps[];
    onRegionClick?: (
        nextPathAttrs: RegionProps[], 
        clickData: MouseEvent<SVGPathElement, globalThis.MouseEvent>, 
        index: number
    ) => void;
    className?: string;
}

export function Region({ id, ...props }: RegionProps): React.ReactElement<SVGPathElement> {
    return <path id={id} {...props} />
}

export default function MapSVG({ calloutRegions, onRegionClick, className }: MapSVGProps) {
    const [pathAttrs, setPathAttrs] = useState<RegionProps[]>(calloutRegions);

    function handleClick(e: MouseEvent<SVGPathElement, globalThis.MouseEvent>, index: number) {
        if (onRegionClick) {
            var nextPathAttrs = pathAttrs.slice();
            onRegionClick(nextPathAttrs, e, index);
            setPathAttrs(nextPathAttrs);
        }
    }
    
    return (
        <svg
            viewBox="0 0 614.4 345.6"
            className={className}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            {pathAttrs.map((region, index) =>
                <Region
                    key={region.id}
                    id={region.id}
                    fill={region.fill}
                    d={region.d}
                    onClick={(e) => handleClick(e, index)}
                    fillOpacity={0.5}
                    stroke="#000"
                    strokeDasharray="2.4, 2.4"
                    strokeWidth={2.4}
                />
            )}
        </svg>
    );
}
