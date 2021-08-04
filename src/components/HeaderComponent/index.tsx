import { Link } from "react-router-dom";
import { HeaderComponentProps } from "../../models/components/header";

const HeaderComponent = (props: HeaderComponentProps) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}><span>Star Wars Test</span></Link></li>
                    <li style={{ float: 'right', width: '300px' }}><button className="active" style={{backgroundColor: "#0077ff",width: "300px"}}><Link  to={'/favorites'}>Ver Favoritos <b>{props.favoritePlanet.length}</b></Link></button></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent;