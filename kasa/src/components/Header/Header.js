// Composants conteneur
import './Header.css'
import logoKasa from '../../assets/logoKasa.svg'

function Header () {
    return (
        <header  className='lmj-logo-navBar'>
            <div>
                <img src= {logoKasa} alt ="logo Kasa"></img>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
              <li><a href="#">À Propos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header