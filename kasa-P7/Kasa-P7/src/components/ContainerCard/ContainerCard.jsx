import './ContainerCard.css'
import Card from "../Card/Card";
import { useEffect, useState } from 'react';


function ContainerCard() {
    const [appartements, setAppartements] = useState([]);

    useEffect(fetchAppartement, []);

    function fetchAppartement() {
        fetch("../src/datas/datas.json")
        .then((res) => (res.json())
        .then((res) => setAppartements(res)))
        .catch(console.error);
    }
    
    return(
        <div className="lmj-ContainerCard">
            <ul>
                <li className='lmj-ContainerCard-image'>
                     {appartements.map((appartement,index) => ( 
                     
                       <Card
                            key={index}
                            textCard={appartement.title}
                            imageCard = {appartement.cover}
                            id={appartement.id}
                         />
                    ))}
                </li>
            </ul>
           
        </div>
    )
}


export default ContainerCard