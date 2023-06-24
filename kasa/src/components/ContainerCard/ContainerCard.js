import './ContainerCard.css'

import Card from "../../components/Card/Card";
import AppartmentCard from "../../assets/fond-card.png"

function ContainerCard() {
    
    return(
        <div className="lmj-ContainerCard">
            <ul className="lmj-ContainerCard-image"> 
            <a>
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} /></a>
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} />
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} />
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} />
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} />
            <Card imageCard={AppartmentCard} 
            textCard={"Nom de la Location"} />
           
            </ul>
        </div>
    )
}


export default ContainerCard