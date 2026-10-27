import { type RegionProps } from "../components/svg";
import { BARNACLE_REGIONS } from "./splat3mapsSVG/Barnacle-Optimized-RM-OVER";
import { BLUEFIN_REGIONS } from "./splat3mapsSVG/Bluefin-Optimized-CB-OVER";

export const MAP_REGIONS: Record<string, RegionProps[]> = {
    "barnacle": BARNACLE_REGIONS,
    "bluefin": BLUEFIN_REGIONS
}
