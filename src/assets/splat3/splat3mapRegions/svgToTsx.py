from svgpathtools import Path, Line, QuadraticBezier, CubicBezier, Arc, svg2paths
import pathlib

svg_path = pathlib.Path("./src/assets/splat3/splat3mapRegions/svg/optimized")
tsx_path = "./src/assets/splat3/splat3mapRegions/tsx"

for file in svg_path.rglob("*.svg"):
    if file.is_file():
        paths, attributes = svg2paths(file)
        name = (file.name[:-3] + "tsx")
        index = name.index("-")
        name = name[:index] + "-Optimized" + name[index:]
        with open(tsx_path+"/"+name, "w") as tsxFile:
            tsxFile.write('import { type RegionProps } from "../../../../components/svg";\n')
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
