import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataMovies } from "../../App";
import "../../commonStyle/styleContMovies.scss";

const TvShowsList = () => {
  const data = useSelector(
    (state: { data: { value: { item: dataMovies[] } } }) =>
      state.data.value.item
  );
  const today = new Date();

  const dataTvShows = data.filter((item: dataMovies) => {
    const releasedData = new Date(item.released);
    return item.category === "TvShow" && releasedData <= today;
  });

  const showCaseData = dataTvShows.slice(0, 24);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const dataTvShowElemt = showCaseData.map((elm) => {
    return (
      <div className="cont-movies-elm" key={elm.id}>
        <div className="cont-img">
          <Link to={`/${elm.route}`}>
            <img
              src={elm.img_poster}
              alt="img of Movie"
              className="img-elm"
              onClick={scrollToTop}
            />
          </Link>
        </div>
        <div className="cont-movie-title">
          <p className="movie-title">{elm.title}</p>
          <div className="movie-info">
            <p className="movie-info-duration">{elm.duration}</p>
            <p className="movie-info-category">{elm.category}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="cont-movies">{dataTvShowElemt}</div>;
};

export default TvShowsList;
