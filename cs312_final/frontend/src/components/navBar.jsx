import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
        <nav>
          <Link to="/" id="navP">Boomer Streaming</Link>
          <button id="navCatalog" onClick={function() {navigate("/catalog")}}>Our Catalog</button>
          <div className="navActions">
            <div id="signins">
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Sign in</Link>
            </div>
            <input id="navSearch" type="search" placeholder="Search" aria-label="Search"/>
          </div>
        </nav>
    </div>
  )
}

export default NavBar;

