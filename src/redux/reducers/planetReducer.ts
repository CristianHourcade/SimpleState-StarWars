import { PlanetAction } from "../../models/actions";
import { Planet } from "../../models/planet";

const INIT_STATE = {
    navigationData: null,
    favoritePlanet: []
};

export const planetReducer = (state = INIT_STATE, action: PlanetAction) => {
    switch (action.type) {
        case "INIT_STATE":
            return {
                ...state,
                navigationData: action.payload
            };
        case "ADD_TO_FAVORITE":
            if (state.favoritePlanet.findIndex((element: Planet) => element.name === action.payload.name) === -1) {
                return {
                    ...state,
                    favoritePlanet: [...state.favoritePlanet, action.payload]
                };
            } else {
                alert("Este planeta ya fue visitado, ¿Por qué no ves otro planeta?");
                return {
                    ...state
                }
            }
        case "REMOVE_FROM_FAVORITE":
            const index = state.favoritePlanet.findIndex((element: Planet) => element.name === action.payload.name);
            if (index !== -1) {
                const newFavoriteList = state.favoritePlanet.filter((element: Planet) => element.name !== action.payload.name)
                return {
                    ...state,
                    favoritePlanet: newFavoriteList
                }
            }
        default:
            return state;
    }
};