import { useState } from 'react';
import './App.css';
import HomePage from  './pages/homePage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WebPlayer from './pages/webPlayer.jsx';
import SignUp from './pages/signup.jsx';
import SignIn from './pages/signin.jsx';
import Catalog from './pages/catalog.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/watch' element={<WebPlayer/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/catalog' element={<Catalog/>}/>

      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App;

