import "./main.scss"
import {createBrowserRouter ,createRoutesFromElements, Route , Navigate, RouterProvider, Outlet} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {useDispatch , useSelector} from "react-redux"
import { getAllData } from "./Redux/dataSlice"
import supabase from "./supabase"
import {useEffect} from "react"

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
  relesed:string,
  title:string,
  trailer:string
}

const App = () => {

  const dispatch = useDispatch()

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
      </Route>
    )
  ) 
 
  return(
  <>
    <RouterProvider router={router} />
  </>
)}

export default App