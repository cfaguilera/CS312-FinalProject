import { useNavigate } from "react-router-dom";

function MovieCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className="movieCard">
                <h2 id="catalogMovieTitle">Movie Title</h2>
                <img id ="catalogMovieImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjodBduG4MZ7tlNTS0dV9RC8ZhNoEqQWNjHyZ5wSOE2A&s=10" alt="Hero"/>
                <br />
                <button className="sortButton" id="selectedMovie" type="button" onClick={function() {navigate("/")}}>Select Movie</button>
            </div>
        </>
    )
}

export default MovieCard;
