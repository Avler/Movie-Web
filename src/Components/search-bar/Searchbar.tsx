import { Link } from "react-router-dom";
import "./search.scss"
import { useSelector } from "react-redux";
import { dataMovies } from "../../App";


const Searchbar = ({search ,setsearch}:any) => {

    const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)

    const clearSearch = ()=> {
        setsearch("")
    }
    return(
        <>
           <ul className={"searchList"}>
                     {
                         data.filter((movie:dataMovies) => {
                             if(search === "") {
                                 return movie
                             } else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                                 return movie;
                             }
                         }).map((movie:dataMovies)=>
                             search === "" ? null : <Link to={`/${movie.route}`} key={movie.id} onClick={clearSearch} className={"list-item"} >
                                <img src={movie.img}/>
                                <span>{movie.title}</span>
                                
                             </Link>
                         )
                     }
                 </ul>
        </>
    )
}

export default Searchbar