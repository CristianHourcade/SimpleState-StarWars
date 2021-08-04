import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Planet } from "../../models/planet";
import { ReduxState } from "../../models/reduxState";
import { removeFromFavoriteList } from "../../redux/actions/planet";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/PaginationComponent";
import HeaderComponent from "../../components/HeaderComponent";

const FavoritesContainer = () => {
    const { favoritePlanet } = useSelector((state: ReduxState) => state.planetReducer);
    const dispatch = useDispatch();

    const updateFavorites = (planet: Planet) => {
        dispatch(removeFromFavoriteList(planet));
    }

    useEffect(() => {
        
    }, []);

    return (
        <>
            <HeaderComponent favoritePlanet={favoritePlanet} />

            <section className="breadcum">
                Pagina de favoritos - {favoritePlanet.length}
            </section>

            <section className="text-center">
                <div className="grid-container ">
                    {(favoritePlanet.length === 0) && <h3>¡No has agregado ningun planeta como favorito!</h3>}
                    {favoritePlanet.map((planet, index) => {
                        return (
                            <CardComponent key={index} planet={planet} addToFavorite={updateFavorites} isFavorite={true}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default FavoritesContainer