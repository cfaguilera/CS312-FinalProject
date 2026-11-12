import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();
    return ( <>
        <NavBar />
        <h1>Search results</h1>
        <h2 id="searchQuery">Movie name</h2>

        <div className="searchToolbar">
            <div className="searchSort sortControls">
            <button className="sortButton" type="button">Sort</button>
            <select className="sortSelect" name='movieSorting' id='movieSearchList' aria-label="Sort movies by">
              <option value="rating">Rating</option>
              <option value="genre">Genre</option>
              <option value="alphaAsc">A-Z</option>
              <option value="alphaDesc">Z-A</option>
            </select>
          </div>
        </div>
        <br />
        <div className="results">
            <div className="resultBox">
                <img id ="resultImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjodBduG4MZ7tlNTS0dV9RC8ZhNoEqQWNjHyZ5wSOE2A&s=10" alt="Hero"/> 
            
                <h2 id="movieTitleRes">Movie Title here</h2>
                <button className="sortButton" id="selectedMovie" type="button" onClick={function() {navigate("/")}}>Select Movie</button>
            </div>

            <br />

            <div className="resultBox">
                <img id ="resultImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjodBduG4MZ7tlNTS0dV9RC8ZhNoEqQWNjHyZ5wSOE2A&s=10" alt="Hero"/> 
            
                <h2 id="movieTitleRes">Movie Title here</h2>
                <button className="sortButton" id="selectedMovie" type="button" onClick={function() {navigate("/")}}>Select Movie</button>
            </div>
        </div>
        </>
        )
    }

export default Search;
