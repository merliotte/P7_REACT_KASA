import "./About.css"
import Banner from "../../components/Banner/Banner"
import AboutBackground from  "../../assets/about-background.png"
import Collapse from "../../components/AppartementPage/Collapse/Collapse"

function About({collaspe}) {

    return(
        <div className="lmg-about-page">

            <Banner imageBackground={AboutBackground} 
            />
            <div className="lmg-about-page-container">
                <ul>
                    <li className="lmg-about-page-container-collapse">
                    <Collapse 
                        title= "Fiabilité"
                        content= "La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme."
                    />
                    </li>
                    <li className="lmg-about-page-container-collapse">
                    <Collapse
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de note plateforme."   
                    />
                    </li>
                    <li className="lmg-about-page-container-collapse">
                    <Collapse 
                        title="Service" 
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                    </li>
                    <li className="lmg-about-page-container-collapse">
                    <Collapse
                        title="Sécurité" 
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                        pour les voyageurs, chaque logement correspond aux critères de sécurité
                        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                        locataire, cela permet à nos équipes de vérifier que les standards sont 
                        bien respectés. Nous organisons également des ateliers sur la sécurité 
                        domestique pour nos hôtes."
                    />
                    </li>  
                </ul>
            </div>
        </div>
    )
}

export default About