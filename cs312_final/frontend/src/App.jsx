import { useState } from 'react';
import './App.css';
import HomePage from  './pages/homePage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WebPlayer from './pages/webPlayer.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/watch' element={<WebPlayer/>}/>

      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App;

