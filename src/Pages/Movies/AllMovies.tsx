import { useSelector } from "react-redux"
import { dataMovies } from "../../App"
import { Link } from "react-router-dom"
import "./allmovieList.scss"
import {useState} from "react"



const AllMoviesList = () => {

    const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)
    const today = new Date()
    
    const dataMovies = data.filter((item:dataMovies) => {
        const releasedData = new Date(item.released)
        return item.category === "Movie"  && releasedData <= today })
    
    const [showSlice , setShowSlice] = useState<number>()
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      };
     
   

    const listSlices:any = [];
    for (let i=0; i < dataMovies.length; i+=30) {
        listSlices.push(dataMovies.slice(i, i+30))
    }
    console.log(listSlices)
    const showSliceValue = (index:number) => {
        setShowSlice(index)
    }

    const dataMoviesList = listSlices.map(( elm:any, index:number) => {
        return(
            <li className="list-element" key={index} >
                <p onClick={() => showSliceValue(index)}>{index + 1}</p>
            </li>
            )
    }   
    )
        
            
    

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
        <div className="cont-section-movies">
            <h2 className="cont-section-title">All Movies</h2>
            <div className="list-cont">
                <ul className="list" >
                    {dataMoviesList}
                </ul>
            </div>
            <div className="cont-movies-element">
                {dataMoviesElemt}
            </div>
        </div>
        
                
            
    )
}


export default AllMoviesList