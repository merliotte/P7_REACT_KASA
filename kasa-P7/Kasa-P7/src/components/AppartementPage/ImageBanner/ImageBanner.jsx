import "./ImageBanner.css"
 import { useState } from "react";

export default function ImageBanner(props) {

  const pictures= props.pictures;
  
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName= (i) => {
    if(i === currentPicture) return "show";
    return "";
  }
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  return (

    <div className="lmj-image-banner"> 
    <button onClick={moveToNext}>Previous</button>
    <button>Next</button>
      {pictures.map((pic, i) => (
        <img key={pic} src={pic} className={getClassName(i)}></img>
      ))}
    </div>
  )
  
}
