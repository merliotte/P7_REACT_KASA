import { Link } from "react-router-dom";
import "./Card.css"

function Card (props) {

    return (
      <Link to="/appartement" state={{
        appartementId: props.id
      }}>
        <div className="lmj-Card">
              <img src= {props.imageCard} alt="Image Appartement" className="lmj-Card-Image"> 
              </img>
              <p className="lmj-Card-Image-Text">{props.textCard}
              </p>
        </div>
      </Link>
    )
}

export default  Card 