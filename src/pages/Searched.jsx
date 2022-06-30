import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navigation from "./../components/Navigation";

function Searched() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const getSearched = async (name) => {
      const api = await fetch(
        `${process.env.REACT_APP_BASE_URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const movies = await api.json();
      setSearchedMovies(movies.results);
      console.log(movies);
    };

    getSearched(params.search);
  }, [params.search]);

  return (
    <>
      <Navigation />
      <div className="global-container">
        <div className="header-wrapper flex-row">
          <h1 className="main__header">Search Results for: {params.search}</h1>
        </div>
        <div className="default__container searched">
          {searchedMovies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Searched;
