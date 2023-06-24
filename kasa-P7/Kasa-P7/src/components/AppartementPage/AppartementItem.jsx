import Datas from "../../datas/datas.json"

function AppartementItem() {

    return(
        <div>
            {Datas.map(({id, name}) => (
                <li key={id}> {name} </li>
            ))}
        </div>
    )
}

export default AppartementItem


