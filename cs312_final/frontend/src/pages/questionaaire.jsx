import { useState } from 'react'
import NavBar from "../components/navBar";
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar />
            <br />
            <h1>Account Questionnaire</h1>
            <br />
            <h2>Pick your preferred genre from the dropdown</h2>
            <br />
            <div className="questionaaireSort">
                <button className="sortButton" type="button" onClick={function() {navigate('/')}}>Select genre</button>
                <select className="sortSelect" name='movieSorting' id='prefferedGenre' aria-label="Genres">
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="romance">Romance</option>
                <option value="drama">Drama</option>
                </select>
            </div>
        </>
    )
}

export default Questionnaire;

