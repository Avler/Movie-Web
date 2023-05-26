import "./home.scss"
import { useSelector } from "react-redux/es/exports"
import { dataMovies } from "../../App"
import {useState} from "react"
import { Link } from "react-router-dom"
import MoviesShow from "../../Components/MoviesList/MoviesList"

const Home = () => {

const [showCategory , setShowCategory] = useState<boolean>(true)

const changeCaterogry = (item:boolean) => {
    setShowCategory(item)
}

    return(
      <section className="home-cont">
        <div className="home-cont-title">
            <h1 className="home-title">Av Movies</h1>
            <p className="home-des">Av movies - Hd movies online - watch new movies online free - Watch movies online for free and watch tv shows online free with HiMovies.to . We're a great alternative to putlocker tv.</p>
        </div>
        <div className="cont-section">
            <div className="home-cont-btns">
                <button className={showCategory? "btn-active" : "btn"} onClick={() =>changeCaterogry(true)}>Movies</button>
                <button className={showCategory? "btn" : "btn-active"} onClick={() =>changeCaterogry(false)}>TV Shows</button>
            </div>
            <h2 className="cont-section-title">{showCategory ? "Trending Movies" : "Trending Tv Shows"}</h2>
            <MoviesShow />
        </div>
      </section>
    )
}

export default Home
