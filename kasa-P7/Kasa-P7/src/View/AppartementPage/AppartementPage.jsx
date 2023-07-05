import "./AppartementPage.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import AppartementHeader from "../../components/AppartementPage/AppartementHeader/AppartementHeader";
import ImageBanner from "../../components/ImageBanner/ImageBanner";

function AppartementPage() {

    const location = useLocation();
    const [selectedFlat, setSelectedFlat] = useState(null);
    

    useEffect(() => {
        console.log("component was mounted");
    
        fetchAppartementData();

        return() => {
            console.log("component was umonted, we cancel the fetch");
        };

    }, []);

     function fetchAppartementData() {
        fetch("../src/datas/datas.json")
        .then((res) => res.json())
        .then((apparts) => { 
            const selectedFlat = apparts.find((flat) => flat.id === location.state.appartementId); 
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
