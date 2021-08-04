import { NavigationPlanets } from "./navigation";
import { Planet } from "./planet";

export interface ReduxState {
    planetReducer:{
        navigationData: NavigationPlanets,
        favoritePlanet: Planet[]
    }
}