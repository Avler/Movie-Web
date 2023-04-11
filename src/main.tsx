
import  ReactDOM  from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import App from "./App"
import "./main.scss"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  

  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
)