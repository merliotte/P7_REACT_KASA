import "./AppartementPage.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import AppartementHeader from "./AppartementHeader/AppartementHeader";
import ImageBanner from "./ImageBanner/ImageBanner";

function AppartementPage() {

    const location = useLocation();
    const [selectedFlat, setSelectedFlat] = useState(null);
    

    useEffect(fetchAppartementData, []);

     function fetchAppartementData() {
        fetch("../src/datas/datas.json")
        .then((res) => res.json())
        .then((apparts) => { 
            const selectedFlat = apparts.find((flat) => flat.id === location.state.appartementId); 
            console.log('selectedFlat', selectedFlat)
            setSelectedFlat(selectedFlat);
        })
        .catch(console.error);

     }
     if ( selectedFlat == null) {
        return <div> ...Loading</div>;
     }
    return (
        <div className="lmj-appartement-page">
            <div>
                <ImageBanner  pictures={selectedFlat.pictures} />
            </div>
            <div>
                <AppartementHeader selectedFlat = {selectedFlat} />                
            </div>
       
        </div>
    )
}
export default AppartementPage
