import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./../components/Navigation";

function SingleMovie() {
  const [movie, setMovie] = useState();

  // get the movie id from url parameters, (https://reactrouter.com/docs/en/v6/hooks/use-params)
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const api = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json(); // format the fetched data from the api to json

      console.log(data);
      // add data to the state
      setMovie(data);
    };

    getMovie();
  }, [id]); // add id to useEffect dependencies so it loads every time the id changes

  // if there is no data
  if (!movie)
    return (
      <div className="loading">
        <span>LOADING</span>
      </div>
    );

  return (
    <>
      <Navigation />
      <div className="single_movie__container">
        <div className="flex-row">
          <a href="/" className="btn btn-dark btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back
          </a>
        </div>
        <div className="flex-row">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="img-responsive"
              alt="movie poster"
            />
            <div className="movie__rate">
              {movie.vote_average} <span className="percent">%</span>
            </div>
          </div>
          <div className="right">
            <h1>{movie.title}</h1>
            <div className="short__description flex-row">
              <p className="release__date">{movie.release_date}</p>
              <p className="original__language">({movie.original_language})</p>
              <p className="movie__hours">{movie.runtime}' min</p>
            </div>
            <p className="tagline">"{movie.tagline}"</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleMovie;
