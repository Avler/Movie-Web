import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import dataReducer from "./redux/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
