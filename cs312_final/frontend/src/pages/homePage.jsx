import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
      <NavBar />

      <main>
        <br/>
        <br/>
        <h1>Welcome to Boomer Streaming</h1>
        <br />

        <div className='movieRow'>
          <img id ="movieImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjodBduG4MZ7tlNTS0dV9RC8ZhNoEqQWNjHyZ5wSOE2A&s=10"
           alt="Hero"/> 
           <div id="movieItems">
          <h2>Movie Title here</h2> 
          <p> Movie rating: here</p>
          <p> Movie description: here</p>
          </div>

        </div>
        <br/>
        <button className="playButton" onClick={function() {navigate("/watch")}}></button>
        <br/>
        <br/>

        <div className="reviewSection">
          <div className="reviewSort">
            <button id="sortButton">Sort</button>
            <select name='sorting' id='listing' aria-label="Sort reviews by">
              <option value="rating">Rating</option>
              <option value="helpfulness">Likes</option>
            </select>
          </div>
          <h1>Reviews</h1>
          <button id='makeReview'>Add your own Review</button>
        </div>
        <br />
        <br/>

        <div className='reviews'>
          <div id='review'>
            <div id='reviewTop'>
              <h2 id='reviewAuthor'>Author</h2>
              <h2 id="reviewTitle">Review title</h2>
              <div className='reviewRating'>
                <span className='starFilled'>★</span>
                <span className='starFilled'>★</span>
                <span className='starFilled'>★</span>
                <span className='starEmpty'>☆</span>
                <span className='starEmpty'>☆</span>

              </div>
            </div>
            <div id='reviewBottom'>
              <p id='reviewPG'>hello this is a fake review this movie was amazing the CGI was so good!</p>
            </div>
          </div>
        </div>

      </main>
    </>
    )
}

export default HomePage;

