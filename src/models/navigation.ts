import { Planet } from "./planet";

export interface NavigationPlanets {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}