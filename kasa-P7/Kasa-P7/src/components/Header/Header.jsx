// Composants conteneur
import { NavLink } from "react-router-dom";
import logoKasa from '../../assets/logoKasa.svg'
import "./Header.css"


function Header () {
    return (
        <header  className='lmj-logo-navBar'>
            <div>
                <NavLink to="/"><img src= {logoKasa} alt ="logo Kasa"></img></NavLink>
            </div>
            <nav>
                <ul>
                    <NavLink to="/"><li>Accueil</li></NavLink>
                    <NavLink to="aboutPage"><li> À Propos</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header