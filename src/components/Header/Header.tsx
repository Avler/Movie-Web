import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/logo.png";
import Searchbar from "../Searchbar/Searchbar";
import LoginForm from "../LoginForm/LoginForm";
import { userToken } from "../../App";
import "./style.scss";


interface HeaderProps{
  showPanel:(state: ((prevState:boolean) => boolean ) | boolean) => void 
  userToken: userToken | null
  setUserToken: React.Dispatch<React.SetStateAction<userToken | null>>
}
const Header:React.FC<HeaderProps> = ({showPanel,userToken,setUserToken}) =>{
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  
  let userId
  if(userToken) {
    userId = userToken!.user!.id 
  }  
  
  const showMenu = (state: boolean) => {
    setNavMenu(state);
  };
  const userPanel = ()=>{
    showPanel((state) => !state);
    setNavMenu(false);
  };
  const logOut = ()=>{
    setUserToken(null)
    showPanel(false)
  }
  return (
    <section className="header-section">
      <div className="header-section-head">
        {navMenu ? (
          <nav className="header-section-nav">
            <button className="close-btn" onClick={() => showMenu(false)}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#000000" }}
              />
              Close menu
            </button>
            <ul className="nav-list">
              <Link to="/" onClick={() => showMenu(false)}>
                <li className="nav-items">Home</li>
              </Link>
              <Link to="/Movies" onClick={() => showMenu(false)}>
                <li className="nav-items">Movies</li>
              </Link>
              <Link to="/TvShows" onClick={() => showMenu(false)}>
                <li className="nav-items">TV Shows</li>
              </Link>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          style={{ color: "#ffffff" }}
          onClick={() => showMenu(true)}
          className="menu-icon"
        />
        <div className="header-section-head-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-bar-md">
          <ul className="nav-list">
            <Link to="/">
              <li className="nav-items">Home</li>
            </Link>
            <Link to="/Movies">
              <li className="nav-items">Movies</li>
            </Link>
            <Link to="/TvShows">
              <li className="nav-items">TV Shows</li>
            </Link>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            style={{ color: "#ffffff" }}
            className="user-icon"
            onClick={() => userPanel()}
          />
        </div>
      </div>
      <form className="header-section-list">
        <div className="header-section-search">
          <FontAwesomeIcon icon={faSearch} size="sm" className="icon" />
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search Movie / TvShow"
          />
        </div>
        <Searchbar search={searchValue} setsearch={setSearchValue} />
      </form>
      {userToken ? <div>
          <ul className="user-login-panel">
            <li className="user-login-list">Profile</li>
            {userId === "26a76563-1f79-46e6-bced-30507749acc1" ? 
            <li className="user-login-list">Admin Panel</li> : <></>}
            <li className="user-login-list" onClick={logOut}>Logout</li>
          </ul>
        </div>: <></>}
    </section>
  );
};

export default Header;
