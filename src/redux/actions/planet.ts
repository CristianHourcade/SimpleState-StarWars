import { NavigationPlanets } from "../../models/navigation"
import { Planet } from "../../models/planet"

export const setNavigationPlanets = (planet : NavigationPlanets) => {
    return {
        type: 'INIT_STATE',
        payload: planet
    }
}

export const updateFavoriteList = (planet : Planet | null) => {
    return {
        type: 'ADD_TO_FAVORITE',
        payload: planet
    }
}

export const removeFromFavoriteList = (planet : Planet | null) => {
    return {
        type: 'REMOVE_FROM_FAVORITE',
        payload: planet
    }
}