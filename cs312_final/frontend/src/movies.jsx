import {useEffect, useState} from 'react'
import axios from 'axios'
function MovieRow(props)
{
    
    const [movie, setMovie] = useState({});

    let info = {
        movie_id: props.id
    }
    useEffect(() => {
        axios.post("http://localhost:8000/getmovie", info).then((res) => {
            setMovie(res.data)
        })
    }, [])
    
    return (
        <div>
            {(typeof thisMovie === undefined) ? (
                <p>Loading movie...</p>
            ) : (

           <div className='movieRow'> 
          <img id ="movieImage" src={movie.poster}
           alt="Hero"/> 
           <div id="movieItems">
          <h2>{movie.title}</h2> 
          <p> {movie.rating}</p>
          <p>{movie.desc}</p>
          </div>
          
        </div>
        )
                
         }
         </div>
    )
}

export {MovieRow}