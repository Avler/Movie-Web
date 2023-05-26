import { useSelector } from "react-redux"
import { dataMovies } from "../../App"
import { Link } from "react-router-dom"
import {useEffect} from "react"
import "./movieList.scss"



const MoviesShow = () => {

    const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)
    let dataMovies = data.filter((item:dataMovies) => item.category === "Movie")
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      };
     
    
    const dataMoviesElemt = dataMovies.map(elm => {
        return(
            <div className="cont-movies-elm" key={elm.id}>
                <div className="cont-img">
                   <Link to={`/${elm.route}`}><img src={elm.img_poster} alt="img of Movie" className="img-elm" onClick={scrollToTop}/></Link> 
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
        <div className="cont-movies">
            {dataMoviesElemt}
        </div>
                
            
    )
}


export default MoviesShow