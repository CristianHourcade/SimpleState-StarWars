import { Link } from "react-router-dom";
import { HeaderComponentProps } from "../../models/components/header";

const HeaderComponent = (props: HeaderComponentProps) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}><a href="#">Star Wars Test</a></Link></li>
                    <li style={{ float: 'right', width: '300px' }}><Link  to={'/favorites'}><a className="active" href="#about">Ver Favoritos <b>{props.favoritePlanet.length}</b></a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent;