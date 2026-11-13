import { Link, useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  console.log(props.user)
  return (
    <div>
        <nav>
          <Link to="/" id="navP">Boomer Streaming</Link>
          <button id="navCatalog" onClick={function() {navigate("/catalog")}}>Our Catalog</button>
          {(props.user === null || props.user === undefined) ? (
            <div id="signins">
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Sign in</Link>
            </div>
          ) : (
            <p>Welcome, {props.user}</p>
          )
          }
          <div className="navActions">
            
            <form className="navSearchForm" role="search" action="/search" method="get">
              <input id="navSearch" type="search" placeholder="Search..." aria-label="Search movies" name="q"/>
              <button type="submit" id="searchButton" onClick={function() {navigate("/search")}}>Search</button>
            </form>
          </div>
        </nav>
    </div>
  )
}

export default NavBar;

