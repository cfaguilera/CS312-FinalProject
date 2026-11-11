import NavBar from "../components/navBar";
import testVideo from "./test.mp4";
import MovieInfo from "../components/movieInfo";

function WebPlayer() {
    return (
        <>
            <div>
                <NavBar/>
                <br/>
                <br/>
                <h1>Web player</h1>
                <h2>Movie Title</h2>
                <video width="90%" height="50%" controls>
                    <source src={testVideo} type="video/mp4" id="MovieSource"/>Your browser does not support this video.
                </video>

                
                <MovieInfo/>
            </div>
        </>
    )
}

export default WebPlayer;

