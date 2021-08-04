import { CardComponentProps } from "../../models/components/card";

const CardComponent = (props: CardComponentProps) => {
    return (
        <div className="card col-4">
            <img src="https://www.ecestaticos.com/imagestatic/clipping/970/99f/97099f4138cd9556348e974cd31d7bf9.jpg" alt="Avatar" width="150" />
            <div className="container">
                <h4><b>{props.planet.name}</b></h4>
                <p>Diametro: {props.planet.diameter}</p>
                <p>Clima: {props.planet.climate}</p>
                <p>Terreno: {props.planet.terrain}</p>
                <p>
                    {!props.isFavorite  ?
                        <button className="button-primary" onClick={() => { props.addToFavorite(props.planet) }}>Agregar a favoritos</button>
                        :
                        <button className="button-secondary" onClick={() => { props.addToFavorite(props.planet) }}>Eliminar de los favoritos</button>
                    }
                </p>
            </div>
        </div>
    )
}
export default CardComponent;