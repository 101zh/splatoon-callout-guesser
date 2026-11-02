import { type RegionProps } from "../components/svg";
import { BARNACLE_REGIONS } from "./splat3/splat3mapRegions/tsx/Barnacle-Optimized-RM-OVER";
import { BLUEFIN_REGIONS } from "./splat3/splat3mapRegions/tsx/Bluefin-Optimized-CB-OVER";
import { BRINEWATER_REGIONS } from "./splat3/splat3mapRegions/tsx/Brinewater-Optimized-RM-OVER";
import { CRABLEG_REGIONS } from "./splat3/splat3mapRegions/tsx/Crableg-Optimized-TC-OVER";
import { EELTAIL_REGIONS } from "./splat3/splat3mapRegions/tsx/Eeltail-Optimized-SZ-OVER";
import { FLOUNDER_REGIONS } from "./splat3/splat3mapRegions/tsx/Flounder-Optimized-SZ-OVER";
import { HAGGLEFISH_REGIONS } from "./splat3/splat3mapRegions/tsx/Hagglefish-Optimized-RM-OVER";
import { HAMMERHEAD_REGIONS } from "./splat3/splat3mapRegions/tsx/Hammerhead-Optimized-TC-OVER";
import { HUMPBACK_REGIONS } from "./splat3/splat3mapRegions/tsx/Humpback-Optimized-TC-OVER";
import { INKBLOT_REGIONS } from "./splat3/splat3mapRegions/tsx/Inkblot-Optimized-TC-OVER";
import { MAHI_REGIONS_CB_RM } from "./splat3/splat3mapRegions/tsx/Mahi-Optimized-CB-OVER";
import { MAHI_REGIONS_SZ } from "./splat3/splat3mapRegions/tsx/Mahi-Optimized-SZ-OVER";
import { MAHI_REGIONS_TC } from "./splat3/splat3mapRegions/tsx/Mahi-Optimized-TC-OVER";
import { MAKOMART_REGIONS } from "./splat3/splat3mapRegions/tsx/MakoMart-Optimized-SZ-OVER";
import { MANTA_REGIONS } from "./splat3/splat3mapRegions/tsx/Manta-Optimized-SZ-OVER";
import { MARLIN_REGIONS } from "./splat3/splat3mapRegions/tsx/Marlin-Optimized-RM-OVER";
import { MINCEMEAT_REGIONS } from "./splat3/splat3mapRegions/tsx/Mincemeat-Optimized-RM-OVER";
import { MUSEUM_REGIONS } from "./splat3/splat3mapRegions/tsx/Museum-Optimized-RM-OVER";
import { ROBO_REGIONS } from "./splat3/splat3mapRegions/tsx/Robo-Optimized-SZ-OVER";
import { SCORCH_REGIONS } from "./splat3/splat3mapRegions/tsx/Scorch-Optimized-CB-OVER";
import { SHIPSHAPE_REGIONS } from "./splat3/splat3mapRegions/tsx/Shipshape-Optimized-TC-OVER";
import { STURGEON_REGIONS } from "./splat3/splat3mapRegions/tsx/Sturgeon-Optimized-SZ-OVER";
import { UM_AMI_REGIONS } from "./splat3/splat3mapRegions/tsx/Um_ami-Optimized-SZ-OVER";
import { UNDERTOW_REGIONS } from "./splat3/splat3mapRegions/tsx/Undertow-Optimized-SZ-OVER";
import { WAHOO_REGIONS } from "./splat3/splat3mapRegions/tsx/Wahoo-Optimized-SZ-OVER";

export const MAP_REGIONS: Record<string, { strokeSize: number, viewBox: string, regions: RegionProps[] }> = {
    "barnacle": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: BARNACLE_REGIONS },
    "bluefin": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: BLUEFIN_REGIONS },
    "brinewater": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: BRINEWATER_REGIONS },
    "crableg": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: CRABLEG_REGIONS },
    "eeltail": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: EELTAIL_REGIONS },
    "flounder": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: FLOUNDER_REGIONS },
    "hagglefish": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: HAGGLEFISH_REGIONS },
    "hammerhead": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: HAMMERHEAD_REGIONS },
    "humpback": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: HUMPBACK_REGIONS },
    "inkblot": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: INKBLOT_REGIONS },
    "mahi-cb-rm": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MAHI_REGIONS_CB_RM },
    "mahi-sz": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MAHI_REGIONS_SZ },
    "mahi-tc": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MAHI_REGIONS_TC },
    "makomart": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: MAKOMART_REGIONS },
    "manta": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MANTA_REGIONS },
    "marlin": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MARLIN_REGIONS },
    "mincemeat": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MINCEMEAT_REGIONS },
    "museum": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: MUSEUM_REGIONS },
    "robo": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: ROBO_REGIONS },
    "scorch": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: SCORCH_REGIONS },
    "shipshape": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: SHIPSHAPE_REGIONS },
    "sturgeon": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: STURGEON_REGIONS },
    "um_ami": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: UM_AMI_REGIONS },
    "undertow": { strokeSize: 2.4, viewBox: "0 0 614.4 345.6", regions: UNDERTOW_REGIONS },
    "wahoo": { strokeSize: 12.0, viewBox: "0 0 2560 1440", regions: WAHOO_REGIONS }
}
