import { useState } from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FindPlanetsByName, GetPlanets } from "../../helper/planetHelper";
import { Planet } from "../../models/planet";
import { ReduxState } from "../../models/reduxState";
import { updateFavoriteList, setNavigationPlanets } from "../../redux/actions/planet";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/PaginationComponent";
import HeaderComponent from "../../components/HeaderComponent";

const HomeContainer = () => {
    const [pageIndex, setPageIndex] = useState<Number>(1);
    const [querySearch, setQuerySearch] = useState<string>('');
    const { navigationData, favoritePlanet } = useSelector((state: ReduxState) => state.planetReducer);
    const dispatch = useDispatch();

    const changePage = async (page: number) => {
        setPageIndex(page);
        changeNavigationPlanet(page)
    }

    const handleSearch = async () => {
        const planetsByName = await FindPlanetsByName(querySearch);
        dispatch(setNavigationPlanets(planetsByName));
    }

    const changeNavigationPlanet = async (page = pageIndex) => {
        const dataPlanets = await GetPlanets(`?page=${page}`)
        dispatch(setNavigationPlanets(dataPlanets));
    }

    const updateFavorites = (planet: Planet) => {
        dispatch(updateFavoriteList(planet));
    }

    useEffect(() => {
        changeNavigationPlanet()
    }, []);

    if (!navigationData) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <HeaderComponent favoritePlanet={favoritePlanet} />

            <section className="breadcum">
                Star Wars Test / Api / Page {pageIndex}
                <div style={{ float: 'right' }}>
                    <input placeholder="Buscar por nombre de planeta" onInput={(e) => {
                        const target = e.target as HTMLInputElement
                        setQuerySearch(target.value)
                    }} />
                    <button onClick={handleSearch}>Buscar</button>
                </div>
            </section>

            <section className="text-center">
                <div className="grid-container ">
                    {(navigationData.results.length === 0) && <h3>¡No hemos encontrado planetas :(!</h3>}
                    {navigationData.results.map((planet, index) => {
                        return (
                            <CardComponent key={index} planet={planet} addToFavorite={updateFavorites} isFavorite={false} />
                        )
                    })}
                </div>
                {(querySearch === '' && navigationData.count > 10) &&
                    <div className="pagination">
                        <PaginationComponent navigationData={navigationData} changePage={changePage} pageIndex={pageIndex} />
                    </div>
                }
            </section>
        </>
    )
}

export default HomeContainer