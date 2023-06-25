import RedStar from "../../assets/star-rate.svg"
import EmptyStar from "../../assets/emptyStar.svg"

const RatingScale = (props) => {
    
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} >{RedStar}</span> 
                    : <span key={rangeElem.toString()} >{EmptyStar}</span>
            )}
        </div>
    )
}

export default RatingScale;