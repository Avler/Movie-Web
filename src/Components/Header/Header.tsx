import "./header.scss"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faSearch ,faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faUser  } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"
import Searchbar from "../search-bar/Searchbar"
import LoginForm from "../User/LoginForm"


const Header = () => {

    const [navMenu , setNavMenu] = useState<boolean>(false)
    const [loginPanel , setLoginPanel] = useState<boolean>(false)
    const [searchValue , setSearchValue] = useState<string>("")

    const showMenu = (state:boolean) => {
        setNavMenu(state)
    }
    const showPanel = () => {
        setLoginPanel(x => !x)
        setNavMenu(false)
    }
   
    return(
        <section className="header-section">
            <div className="header-section-head">
                {navMenu ?
                 <nav className="header-section-nav" > 
                    <button className="close-btn" onClick={() => showMenu(false)}><FontAwesomeIcon icon={faArrowLeft} style={{color: "#000000",}} />Close menu</button>
                    <ul className="nav-list">
                        <Link to="/" onClick={() => showMenu(false)}><li className="nav-items">Home</li></Link>
                        <Link to="/Movies" onClick={() => showMenu(false)}><li className="nav-items">Movies</li></Link>
                        <Link to="/TvShows" onClick={() => showMenu(false)}><li className="nav-items">TV Shows</li></Link>
                    </ul>
                </nav> : <></>}
                <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#ffffff",}} onClick={() => showMenu(true)} className="menu-icon"/>
                <div className="header-section-head-logo">
                    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                </div>
                <div className="nav-bar-md">
                    <ul className="nav-list">
                        <Link to="/" ><li className="nav-items">Home</li></Link>
                        <Link to="/Movies" ><li className="nav-items">Movies</li></Link>
                        <Link to="/TvShows" ><li className="nav-items">TV Shows</li></Link>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} size="xl" style={{color: "#ffffff",}} className="user-icon" onClick={() => showPanel()}/>
                </div>
            </div>
            <form className="header-section-list">
                <div className="header-section-search">
                    <FontAwesomeIcon icon={faSearch} size="sm" className="icon"  />
                    <input 
                        type="text" 
                        className="search-input" 
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        placeholder="Search Movie / TvShow"
                    />
                </div>
                <Searchbar search={searchValue} setsearch={setSearchValue}/>
            </form>
            {loginPanel ? <LoginForm />   : <></>}
        </section>
    )
}

export default Header