import EmptyStar from "../../../assets/emptyStar.svg"
import Star from "../../../assets/star-rate.svg"


const RatingScale = (props) => {

    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div >
            {range.map((rangeElem) =>
                (scaleValue >= rangeElem ? 
                    <img key={rangeElem} src={Star} alt="Etoiles"></img>
                    :
                    <img key={rangeElem} src={EmptyStar} alt="Etoiles Vides"></img>
            ))}
        </div>
    )
}

export default RatingScale;