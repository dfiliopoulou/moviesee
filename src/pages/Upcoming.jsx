import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navigation from "../components/Navigation";

function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // api docs (https://developers.themoviedb.org/3/getting-started/introduction)
    const getUpcoming = async () => {
      const api = await fetch(
        `${process.env.REACT_APP_BASE_URL}/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      const data = await api.json(); // format the fetched data from the api to json

      setUpcoming(data.results);
      console.log(data);
    };

    getUpcoming();
  }, [page]); // add page to useEffect dependencies so it loads new date every time the page changes

  function increasePage() {
    setPage((currentPage) => currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function decreasePage() {
    setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navigation />
      <div className="global-container">
        <h1 className="main__header">Upcoming Movies</h1>
        <div className="default__container upcoming">
          {upcoming.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
        <div className="movies-pagination">
          <button
            type="button"
            className="btn btn-outline-warning prev btn-lg"
            onClick={decreasePage}
          >
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
            Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-warning next btn-lg"
            onClick={increasePage}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Upcoming;
