import './Banner.css'


function Banner(props) {
    return (
        <div className='lmj-Banner'>
            <img src= {props.imageBackground} alt =" paysage de montagne" className="lmj-Banner-image">
            </img>
            <h2 className="lmj-Banner-text" >{props.textBackground}
            </h2>
        </div>
        )
}

export default Banner