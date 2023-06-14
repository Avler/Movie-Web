import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesListComing from "../../components/MoviesComingSoon/MoviesComingSoon";
import TvShowsList from "../../components/TvShowList/TvShowsList";
import "./style.scss";

interface homeProps {
  loginPanelShadow: boolean;
  token: object | null;
}

const home: React.FC<homeProps> = ({ loginPanelShadow, token }) => {
  const [showCategory, setShowCategory] = useState<boolean>(true);

  const changeCaterogry = (item: boolean) => {
    setShowCategory(item);
  };

  return (
    <section className="home-cont">
      <div className="home-cont-title">
        <h1 className="home-title">Av Movies</h1>
        <p className="home-des">
          Av movies - Hd movies online - watch new movies online free - Watch
          movies online for free and watch tv shows online free with HiMovies.to
          . We're a great alternative to putlocker tv.
        </p>
      </div>
      <div className="cont-section">
        <div className="home-cont-btns">
          <button
            className={showCategory ? "btn-active" : "btn"}
            onClick={() => changeCaterogry(true)}
          >
            Movies
          </button>
          <button
            className={showCategory ? "btn" : "btn-active"}
            onClick={() => changeCaterogry(false)}
          >
            TV Shows
          </button>
        </div>
        <div className="cont-section-movies">
          <h2 className="cont-section-title">
            {showCategory ? "Trending Movies" : "Trending Tv Shows"}
          </h2>
          {showCategory ? <MoviesList /> : <TvShowsList />}
        </div>
        <div className="cont-coming-soon">
          <h2 className="cont-section-title">Coming Soon</h2>
          <MoviesListComing />
        </div>
      </div>
      {loginPanelShadow && token === null ? (
        <div className="home-cont-shadow"></div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default home;
