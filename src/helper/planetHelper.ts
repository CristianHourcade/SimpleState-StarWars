import { NavigationPlanets } from "../models/navigation";

export const GetPlanets = async (page:string): Promise<NavigationPlanets>  => {
    const RESPONSE = await fetch(`https://swapi.dev/api/planets/${page}`);
    const data = RESPONSE.json();
    return data
}

export const FindPlanetsByName = async (query: string) => {
    const RESPONSE = await fetch(` https://swapi.dev/api/planets/?search=${query}`);
    const data = RESPONSE.json();
    return data
   
}