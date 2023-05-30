import "./main.scss"
import {createBrowserRouter ,createRoutesFromElements, Route , Navigate, RouterProvider, Outlet} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import {useDispatch , useSelector} from "react-redux"
import { getAllData } from "./Redux/dataSlice"
import supabase from "./supabase"
import {useEffect} from "react"
import Section from "./Pages/Section/Section"
import AllMoviesList from "./Pages/Movies/AllMovies"
import AllTvshow from "./Pages/TvShows/AllTvshow"

export interface dataMovies {
  id:number,
  casts:string,
  country:string,
  description: string,
  category:string,
  duration:string,
  genre:string,
  img:string,
  img_poster:string,
  released:string,
  title:string,
  trailer:string,
  route:string,
}

  const App = () => {

      const dispatch = useDispatch()
      const data = useSelector((state:{data:{value: {item:dataMovies[]}}}) => state.data.value.item)

      const elementsRoot = data.map(elem => {
        return <Route path={elem.route} key={elem.id} element={<Section /> }></Route>
      })

      useEffect(() => {
        getData()
      },[])

      async function getData() {
        const { data} = await supabase
        .from('data-movies')
        .select('*')
        dispatch(getAllData({item:data}))
      } 

      const Root = () => {
      return(
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )
      }
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/Movies" element={<AllMoviesList />} />
          <Route path="/TvShows" element={<AllTvshow />} />
          {elementsRoot}
        </Route>
      )
    ) 
  
    return(
    <>
      <RouterProvider router={router} />
    </>
  )}

  export default App