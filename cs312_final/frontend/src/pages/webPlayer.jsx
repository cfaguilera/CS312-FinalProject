import NavBar from "../components/navBar";
import testVideo from "./test.mp4";
import MovieInfo from "../components/movieInfo";

import {useParams} from 'react-router-dom';
import {MoviePlayer} from "../components/movies.jsx";
function WebPlayer() {
    const { mov } = useParams();
    console.log("Movie ID from URL:", mov); 
    return (
        
            <div>
                <NavBar/>
                <br/>
                <br/>
                <h1>Web player</h1>
                {/*
                <h2>Movie Title</h2>
                <video width="90%" height="50%" controls>
                    <source src={testVideo} type="video/mp4" id="MovieSource"/>Your browser does not support this video.
                </video> 
                */}
                <MoviePlayer id={mov} />

                
                <MovieInfo/>
            </div>
                )
            }
            export default WebPlayer;