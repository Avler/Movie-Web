import "./header.scss"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

    const [navMenu , setNavMenu] = useState<boolean>(false)

    const showMenu = (state:boolean) => {
        setNavMenu(state)
    }
    return(
        <section className="header-section">
            <div>
                {navMenu ? <nav> </nav>:<FontAwesomeIcon icon={faBars} />}
                <div><img src={logo} alt="logo" /></div>
                <div></div>
            </div>
            <div>
                <input type="text" />
            </div>
        </section>
    )
}

export default Header