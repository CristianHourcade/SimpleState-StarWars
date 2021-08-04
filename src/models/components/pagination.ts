import { NavigationPlanets } from "../navigation";

export interface PaginationComponentProps{
    navigationData:NavigationPlanets;
    changePage: Function;
    pageIndex:Number;
}