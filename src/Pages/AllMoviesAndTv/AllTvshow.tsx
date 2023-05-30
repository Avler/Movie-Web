import { useSelector } from "react-redux"
import { dataMovies } from "../../App"
import { Link } from "react-router-dom"
import "./allList.scss"
import {useState} from "react"

const AllTvshow = () => {

    const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)
    const today = new Date()
    
    const dataTv = data.filter((item:dataMovies) => {
        const releasedData = new Date(item.released)
        return item.category === "TvShow"  && releasedData <= today })

    const dataTvShow = dataTv.slice(0,24)
    const [showSlice , setShowSlice] = useState(dataTvShow)
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      };
     
    const listSlices:any = [];
    for (let i=0; i < dataTv.length; i+=24) {
        listSlices.push(dataTv.slice(i, i+24))
    }
   
    const showSliceValue = (index:number) => {
        setShowSlice(listSlices[index])
    }

    const dataTvList = listSlices.map(( elm:any, index:number) => {
        return(
            <li className="list-element" key={index} onClick={() => showSliceValue(index)}>
                <p >{index + 1}</p>
            </li>
            )
    }   
    )
          
    const dataTvElemt = showSlice.map(elm => {
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
            <h2 className="cont-section-title">All TvShows</h2>
            <div className="list-cont">
                <ul className="list" >
                    {dataTvList}
                </ul>
            </div>
            <div className="cont-movies-element">
                {dataTvElemt}
            </div>
        </div>   
    )
}


export default AllTvshow