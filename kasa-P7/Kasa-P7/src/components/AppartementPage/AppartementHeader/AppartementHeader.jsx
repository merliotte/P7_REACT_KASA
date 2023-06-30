import RatingScale from "../RatingScale/RatingScale"
import Collapse from "../Collapse/Collapse";
import "./AppartementHeader.css"

function AppartementHeader({selectedFlat}) {

    const {name} = selectedFlat.host;
    const [fisrtName, lastName] = name.split(' ');

    return (
        
        <div className="lmj-appartement-title">
            <div className="lmj-appartement-title-h1">
                <div> 
                <h1> {selectedFlat.title}</h1>
                <h2 className="lmj-appartement-title-subtitle">{selectedFlat.location}</h2>
                </div>
                <div className="lmj-appartement-host-description">
                            <img src={selectedFlat.host.picture} className="lmj-appartement-host-description-image">
                            </img>
                            <h3>{fisrtName} <br /> {lastName}</h3>
                        </div>
            </div>
            <div className="lmj-appartement-title-subtitle-description" >
                <div className="lmj-appartement-title-subtitle-description-container">
                    {selectedFlat.tags.map((tag) => (
                        <p key ={tag} className="lmj-appartement-title-subtitle-description-coponent"> {tag} </p>
                    ))}
                </div>
                <div className="lmj-appartement-host">
                    
                    <RatingScale 
                        scaleValue= {selectedFlat.rating}/>
                </div>
            </div>
             <article className='lmg-page_collapses'>
                <div className='lmg-page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={selectedFlat.description}
                    />
                </div>
                <div className='lmg-page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={selectedFlat.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </div>
        
    )
}

export default AppartementHeader