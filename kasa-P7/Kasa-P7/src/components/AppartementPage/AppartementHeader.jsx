import RatingScale from "./RatingScale"

function AppartementHeader(props) {

    const selectedFlat = props.selectedFlat;
    const names = selectedFlat.host.name;
    const [fisrtName, lastName] = names.split(' ');


    return (
        
        <div className="lmj-appartement-title">
                <h1> {selectedFlat.title}</h1>
                <h2 className="lmj-appartement-title-subtitle"> {selectedFlat.location}</h2>
            <div className="lmj-appartement-title-subtitle-description" >
                    <div className="lmj-appartement-title-subtitle-description-container">
                        {selectedFlat.tags.map((tag, i) => (
                            <p key ={i} className="lmj-appartement-title-subtitle-description-coponent"> {tag} </p>
                        ))}
                    </div>
                    <div className="lmj-appartement-host">
                        <div className="lmj-appartement-host-description">
                            <h3>{fisrtName} <br /> {lastName}</h3>
                            <img src={selectedFlat.host.picture} className="lmj-appartement-host-description-image">
                            </img>
                        </div>
                        <RatingScale 
                            scaleValue= {selectedFlat.rating}/>
                    </div>
            </div>
        </div>
        
    )
}

export default AppartementHeader