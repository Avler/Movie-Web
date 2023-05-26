import "./header.scss"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faSearch ,faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faUser  } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

const Header = () => {

    const [navMenu , setNavMenu] = useState<boolean>(false)

    const showMenu = (state:boolean) => {
        setNavMenu(state)
    }
    return(
        <section className="header-section">
            <div className="header-section-head">
                {navMenu ?
                 <nav className="header-section-nav" > 
                    <button className="close-btn" onClick={() => showMenu(false)}><FontAwesomeIcon icon={faArrowLeft} style={{color: "#000000",}} />Close menu</button>
                    <ul className="nav-list">
                        <li className="nav-items">Home</li>
                        <li className="nav-items">Movies</li>
                        <li className="nav-items">TV Shows</li>
                    </ul>
                </nav> : <></>}
                <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#ffffff",}} onClick={() => showMenu(true)} className="menu-icon"/>
                <div className="header-section-head-logo">
                    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                </div>
                <div className="nav-bar-md">
                    <ul className="nav-list">
                        <li className="nav-items">Home</li>
                        <li className="nav-items">Movies</li>
                        <li className="nav-items">TV Shows</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} size="xl" style={{color: "#ffffff",}} className="user-icon"/>
                </div>
            </div>
            <form className="header-section-search">
                <FontAwesomeIcon icon={faSearch} size="sm" className="icon"  />
                <input type="text" className="search-input" />
            </form>
        </section>
    )
}

export default Header