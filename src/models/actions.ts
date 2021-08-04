import { Planet } from "./planet";

export interface PlanetAction {
    payload:Planet;
    type:string
}
