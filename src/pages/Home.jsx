import Search from "../components/Search";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <div className="homepage-container">
        <h1>Αre you looking for a movie?</h1>
        <h1>
          Let's <span className="logo">moviesee</span> ...
        </h1>
        <Search />
      </div>
    </>
  );
}
export default Home;