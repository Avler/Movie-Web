import "./main.scss"
import {createBrowserRouter ,createRoutesFromElements, Route , Navigate, RouterProvider, Outlet} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"

const App = () => {

  const Root = () => {
   return(
    <>
      <Header />
      <Outlet />
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