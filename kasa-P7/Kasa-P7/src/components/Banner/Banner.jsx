import './Banner.css'


function Banner(props) {
    return (
        <div className='lmj-Banner'>
            <div className='lmj-Banner-container'>
                <img src= {props.imageBackground} alt =" paysage de montagne" className="lmj-Banner-image">
                </img>
            </div>
            <h2 className="lmj-Banner-text" >{props.textBackground}
            </h2>
        </div>
        )
}

export default Banner