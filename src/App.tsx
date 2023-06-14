import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllData } from "./redux/dataSlice";
import Home from "./pages/home/home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import supabase from "./supabase";
import WatchMovie from "./pages/watchMovie/watchMovie";
import Movies from "./pages/movies/movies";
import TvShows from "./pages/tvShows/tvShows";
import AdminPanel from "./pages/adminPanel/adminPanel";
import LoginForm from "./components/LoginForm/LoginForm";
import "./main.scss";

export interface userToken {
  user: {
    id: string;
  } | null;
  session: object | null;
}
export interface dataMovies {
  id: number;
  casts: string;
  country: string;
  description: string;
  category: string;
  duration: string;
  genre: string;
  img: string;
  img_poster: string;
  released: string;
  title: string;
  trailer: string;
  route: string;
}

const App = () => {
  const [loginPanel, setLoginPanel] = useState<boolean>(false);
  const [token, setToken] = useState<null | userToken>(null);
  const dispatch = useDispatch();
  const data = useSelector(
    (state: { data: { value: { item: dataMovies[] } } }) =>
      state.data.value.item
  );

  const elementsRoot = data.map((elem) => {
    return (
      <Route path={elem.route} key={elem.id} element={<WatchMovie />}></Route>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("data-movies").select("*");
    dispatch(getAllData({ item: data }));
  }
  console.log(token);
  const Root = () => {
    return (
      <>
        <Header
          showPanel={setLoginPanel}
          userToken={token}
          setUserToken={setToken}
        />
        {loginPanel && token === null ? (
          <LoginForm
            closePanel={setLoginPanel}
            token={token}
            setToken={setToken}
          />
        ) : (
          <></>
        )}
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={<Home loginPanelShadow={loginPanel} token={token} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/Movies"
          element={<Movies loginPanelShadow={loginPanel} token={token} />}
        />
        <Route
          path="/TvShows"
          element={<TvShows loginPanelShadow={loginPanel} token={token} />}
        />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        {elementsRoot}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
