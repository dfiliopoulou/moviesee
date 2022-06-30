import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const [menuisActive, setmenuIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    setmenuIsActive((current) => !current);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to={`/`}>moviesee</Link>
          </div>
          <div className={isActive ? "mobile-menu-is-open" : ""}>
            <div className="menu-wrapper">
              <ul className="menu">
                <li>
                  <Link to={`/popular`}>Popular</Link>
                </li>
                <li>
                  <Link to={`/upcoming`}>Upcoming</Link>
                </li>
                <li>
                  <Link to={`/toprated`}>Top Rated</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="burger-menu">
            <button className={isActive ? "active" : ""} onClick={handleClick}>
              <span className="icon-bar top"></span>
              <span className="icon-bar middle"></span>
              <span className="icon-bar bottom"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
