import "./Card.css"

function Card (props) {
    return (
      <div className="lmj-Card">
            <img src= {props.imageCard} alt=" Image Appartement " className="lmj-Card-Image"> 
            </img>
            <p className="lmj-Card-Image-Text">{props.textCard}
            </p>
      </div>
    )
}

export default  Card 