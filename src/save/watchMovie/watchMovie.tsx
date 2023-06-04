import React from "react"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { dataMovies } from "../../App";
import VideoContainer from "../Youtube/VideoConteiner";
import MoviesList from "../MoviesList/MoviesList";
import TvShowsList from "../TvShowList/TvShowsList";
import "../../commonStyle/stylePages.scss";

const watchMovie = ()=>{
  const location = useLocation();
  const elmRoute = location.pathname.substring(1);
  const data = useSelector(
    (state: { data: { value: { item: dataMovies[] } } }) =>
      state.data.value.item
  );

  const singleData: dataMovies[] = data.filter((elm) => elm.route === elmRoute);

  const oneElement = singleData.map((elm) => {
    return (
      <div key={elm.id} className="conteiner">
        <div className="main-conteiner">
          <div className="conteiner-section">
            <img src={elm.img} alt="bg-section" className="bg-section" />
          </div>
          <div className="conteiner-section2">
            <div className="poster">
              <img src={elm.img_poster} alt="poster" className="poster" />
            </div>
            <div className="conteiner-section2-des">
              <div className="title-cont">
                <button className="btn">
                  {" "}
                  <FontAwesomeIcon icon={faCirclePlay} /> Watch Now
                </button>
                <p className="title">{elm.title}</p>
              </div>
              <div className="des-cont">
                <p className="des">{elm.description}</p>
              </div>
              <div className="info-cont">
                <div className="info1-cont">
                  <p className="info1">Released: {elm.released}</p>
                  <p className="info1">Genre: {elm.genre}</p>
                  <p className="info1">Casts: {elm.casts}</p>
                </div>
                <div className="info1-cont">
                  <p className="info1">Duration: {elm.duration}</p>
                  <p className="info1">Country: {elm.country}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="conteiner-trailer">
            <VideoContainer youtubeLink={elm.trailer} />
          </div>
        </div>
        <div className="section-cont-othermovies">
          <h2 className="title">You May Also Like</h2>
          {elm.category === "Movie" ? <MoviesList /> : <TvShowsList />}
        </div>
      </div>
    );
  });

  return <section className="section-cont">{oneElement}</section>;
};

export default watchMovie;
