import  ReactDOM  from "react-dom/client"
import React from "react"
import App from "./App"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "./Redux/dataSlice"

const store = configureStore({
  reducer: {
    data: dataReducer
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)