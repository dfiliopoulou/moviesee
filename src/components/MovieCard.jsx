import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/${movie.id}`} className="movie__block">
      <div className="movie__image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="img-responsive"
          alt="movie poster"
        />
      </div>
      <div className="movie__caption">
        <div className="movie__rate">
          {movie.vote_average} <span className="percent">%</span>
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </Link>
  );
}
export default MovieCard;
