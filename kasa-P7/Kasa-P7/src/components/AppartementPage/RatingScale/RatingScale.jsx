import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import EmptyStar from "../../../assets/star-regular.svg"

import "./Rating.css"

const star = <FontAwesomeIcon icon={faStar} style={{color: "#fe6767",}} />;

const RatingScale = (props) => {

    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='lmg-Rating-Stars' >
            {range.map((rangeElem) =>
                (scaleValue >= rangeElem ? 
                    <div> {star} </div>  
                    :
                    <img src={EmptyStar} alt='star vide' className='lmg-Rating-Stars-Empty'></img>
                ))}
        </div>
    )
}

export default RatingScale;