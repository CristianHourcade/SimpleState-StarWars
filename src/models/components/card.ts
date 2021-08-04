import { Planet } from "../planet";

export interface CardComponentProps {
    planet: Planet;
    children?:any;
    addToFavorite:Function;
    isFavorite?:boolean;
}