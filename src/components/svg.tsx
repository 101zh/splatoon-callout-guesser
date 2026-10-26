import { useState, type MouseEvent, type SVGProps } from "react";

export interface ShapeProps extends React.SVGProps<SVGPathElement> {
    id: string;
}

export function Shape({ id, ...props }: ShapeProps): React.ReactElement<SVGPathElement> {
    return <path
        id={id}
        {...props}
    />
}

export function CreateMapSVG(props: SVGProps<SVGSVGElement>, calloutRegions: ShapeProps[]) : React.JSX.IntrinsicElements["svg"] {
    const [shapeAttrs, setShapeAttrs] = useState<ShapeProps[]>(calloutRegions);

    function handleClick(e: MouseEvent<SVGPathElement, globalThis.MouseEvent>, index:number) {
        console.log("test " + e.currentTarget.id);
        var nextShapeAttrs = shapeAttrs.slice();
        nextShapeAttrs[index].fill = "rgb(255,0,0)";
        setShapeAttrs(nextShapeAttrs);
    }

    return <svg
        viewBox="0 0 614.4 345.6"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        {calloutRegions.map((shape, index) =>
            <Shape
                key={shape.id}
                id={shape.id}
                fill={shape.fill}
                d={shape.d}
                onClick={(e) => handleClick(e, index)}
                fillOpacity={0.5}
                stroke="#000"
                strokeDasharray="2.4, 2.4"
                strokeWidth={2.4}
            />
        )}
    </svg>
}