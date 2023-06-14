import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dataMovies } from "../../App";
import "./style.scss";

interface SearchbarProps {
  search: string;
  setsearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ search, setsearch }) => {
  const data = useSelector(
    (state: { data: { value: { item: dataMovies[] } } }) =>
      state.data.value.item
  );

  const clearSearch = () => {
    setsearch("");
  };
  return (
    <>
      <ul className={"searchList"}>
        {data
          .filter((movie: dataMovies) => {
            if (search === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie: dataMovies) =>
            search === "" ? null : (
              <Link
                to={`/${movie.route}`}
                key={movie.id}
                onClick={clearSearch}
                className={"list-item"}
              >
                <img src={movie.img} />
                <span>{movie.title}</span>
              </Link>
            )
          )}
      </ul>
    </>
  );
};

export default Searchbar;
