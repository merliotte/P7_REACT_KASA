import "./ImageBanner.css"
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} /> 
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

export default function ImageBanner(props) {

  const pictures= props.pictures;
  
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName= (i) => {
    if(i === currentPicture) return "show";
    return "";
  }

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  };
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture -1;
    if(newCurrentPicture < 0) {
      setCurrentPicture(pictures.length -1);
      return;
    }
    setCurrentPicture((currentPicture-1) % pictures.length)
  };

  return (

    <div className="lmj-image-banner"> 
      <div className="lmj-image-banner-container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="image appartement" 
          className={getClassName(i)}></img>
          ))}
          <button className="lmj-btn-next" onClick={moveToNext}>{angleRight}</button>
          <button className="lmj-btn-previous" onClick={moveToPrevious}> {angleLeft}</button>
      </div>
      
    </div>
      
  )
  
}
