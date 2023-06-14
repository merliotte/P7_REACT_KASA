import '../styles/NavBar.css'
import logoKasa from '../assets/logoKasa.svg'


function NavBar() {
    return (
    <div className='lmj-logo-navBar'>
        <img src= {logoKasa} alt ="logo Kasa"></img>
        <ul className='lmj-logo-navBar-ul'>
            <li className='lmj-logo-navBar-ul-li'><a href="#">Accueil</a></li>
            <li className='lmj-logo-navBar-ul-li'>A propos</li>
        </ul>
    </div>
    )
}

export default NavBar