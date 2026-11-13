import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/movieCard";

function Catalog() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar />
            <h1>Our Catalog</h1>
            <br />
            <div className="movieCatalog">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </>
    );
}

export default Catalog;
