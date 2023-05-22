import "./header.scss"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faSearch } from "@fortawesome/free-solid-svg-icons"
import { faUser  } from "@fortawesome/free-regular-svg-icons"

const Header = () => {

    const [navMenu , setNavMenu] = useState<boolean>(false)

    const showMenu = (state:boolean) => {
        setNavMenu(state)
    }
    return(
        <section className="header-section">
            <div className="header-section-head">
                {navMenu ? <nav> </nav>:<FontAwesomeIcon icon={faBars} size="lg" style={{color: "#ffffff",}}/>}
                <div className="header-section-head-logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#ffffff",}}/>
                </div>
            </div>
            <div className="header-section-search">
                <input type="text" className="search-input" />
                <FontAwesomeIcon icon={faSearch} size="sm" className="icon"  />
            </div>
        </section>
    )
}

export default Header