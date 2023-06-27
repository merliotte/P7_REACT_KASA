import { NavLink } from "react-router-dom"
import Header from "../Header/Header"
import "./ErrorPage.css"

function ErrorPage() {
    return(
        <section className="lmj-errorPage">
            <Header />
  
            <h1 className="lmj-errorPage-title">
                404
            </h1>
            <h2 className="lmj-errorPage-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <NavLink title='Accueil' end to='/home' className="error_page_link">Retourner sur la page d'accueil</NavLink>
        </section>
    )
}

export default ErrorPage 