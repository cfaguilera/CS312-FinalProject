import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <p id="navP">
          Boomer Streaming</p>
          <button id="navCatalog">Our Catalog</button>
          <input id="navSearch" type="search" placeholder="Search"/>
        </nav>
      </div>

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
        <br></br>
        <button className='playButton'></button>
      </main>
    </>
  )
}

export default App
