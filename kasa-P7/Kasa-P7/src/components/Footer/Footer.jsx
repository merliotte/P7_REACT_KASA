import "./Footer.css"
import FooterLogo from "../../assets/logo-footer.svg"

function Footer() {
    return(
        <footer>
            <div className="lmj-Footer">
                <img src={FooterLogo} alt="Logo Kasa"></img>
                <p> © 2020 Kasa. All rights reserved </p>
            </div>
        </footer>
    )
}

export default Footer
