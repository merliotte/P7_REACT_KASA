import "./AppartementPage.css"
import Datas from "../../datas/datas.json"
import { useLocation } from "react-router-dom"
import photoTest from "../../assets/fond-card.png"
import Etoiles from "../../assets/star-rate.svg"
import { useEffect } from "react"

function AppartementPage() {

    const location = useLocation();
    console.log("location", location);
    
    useEffect(fetchAppartementData, []);

     function fetchAppartementData() {
        fetch("../src/datas/datas.json")
        .then((res) => res.json())
        .then((apparts) => 
        { const selectedAppartement = apparts.find((appart) => appart.id === location.state.appartementId)})
        .catch(console.error);
     }
    return (
        <div className="lmj-appartement-page">
            <div>
                <img src={photoTest} className="lmj-appartement-page-image" alt="Photo d'un appartement" ></img>
            </div>
            <div className="lmj-appartement-title">
                <h1> Cozy appartement chalereux ouvert </h1>
                <h2 className="lmj-appartement-title-subtitle"> Paris, Ile de france</h2>
                <div className="lmj-appartement-title-subtitle-description" >
                        <div className="lmj-appartement-title-subtitle-description-container">
                            <span className="lmj-appartement-title-subtitle-description-coponent">Cozy</span>
                            <span className="lmj-appartement-title-subtitle-description-coponent">Canal</span>
                            <span className="lmj-appartement-title-subtitle-description-coponent">Paris</span>
                        </div>
                    <div className="lmj-appartement-host">
                        <div className="lmj-appartement-host-description">
                            <h3>Alexandre <br/> Dumas</h3>
                            <img src={photoTest} className="lmj-appartement-host-description-image">
                            </img>
                        </div>
                        <span><img src={Etoiles} alt="Etoiles" className="lmj-appartement-host-note"></img></span>
                    </div>
                </div>
        <div className="lmj-appartement-page-scrolling">
            <span> Description</span>
            <span> Equipements</span>
        </div>
        </div>
        </div>
    )
}
export default AppartementPage
