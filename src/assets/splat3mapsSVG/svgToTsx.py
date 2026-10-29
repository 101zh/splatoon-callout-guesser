from svgpathtools import Path, Line, QuadraticBezier, CubicBezier, Arc, svg2paths
import pathlib

directory_path = pathlib.Path("./src/assets/splat3mapsSVG/")

svg_files = [f for f in directory_path.rglob("*.svg") if f.is_file()]

for file in svg_files:
    if(file.name.__contains__("Optimized")):
        paths, attributes = svg2paths(file)
        with open(directory_path._str+"/"+file.name[:-3] + "tsx", "w") as tsxFile:
            tsxFile.write('import { type RegionProps } from "../../components/svg";\n')
            tsxFile.write("\n")
            tsxFile.write(f"export const {file.name[:file.name.index("-")].upper()}_REGIONS: RegionProps[] = [\n")
            for i in range(len(paths)):
                d = paths[i]
                pathId = "region{:02d}".format(i+1)
                tsxFile.write(f'    {{ id: "{pathId}", fill: "#000", d: "{attributes[i]["d"]}" }}')
                if i < len(paths) - 1:
                    tsxFile.write(",\n")
                else:
                    tsxFile.write("\n")
                    tsxFile.write("]\n")
