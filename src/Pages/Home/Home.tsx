import "./home.scss"
import { useSelector } from "react-redux/es/exports"
import { dataMovies } from "../../App"
import {useState} from "react"
import { Link } from "react-router-dom"

const Home = () => {

const [showCategory , setShowCategory] = useState<boolean>(true)

const changeCaterogry = (item:boolean) => {
    setShowCategory(item)
}

    const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)
    let dataMovies = data.filter((item:dataMovies) => item.category === "Movie")

     const dataMoviesElemt = dataMovies.map(elm => {
        return(
            <div className="cont-movies-elm" key={elm.id}>
                <div className="cont-img">
                   <Link to={elm.route}><img src={elm.img_poster} alt="img of Movie" className="img-elm"/></Link> 
                </div>
               <div className="cont-movie-title">
                    <p className="movie-title">{elm.title}</p>
                    <div className="movie-info">
                        <p className="movie-info-duration">{elm.duration}</p>
                        <p className="movie-info-category">{elm.category}</p>
                    </div>
               </div>
            </div>
        )
    })

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
            <div className="cont-movies">
                {dataMoviesElemt}
            </div>
        </div>
      </section>
    )
}

export default Home
