import NavBar from "../components/navBar";
import { useState } from "react";
import axios from "axios";
function SignIn() {

    const [username, setUsername] = useState("");
    function changeUsernameInput(event) {
        setUsername(event.target.value);
    }
    const [pw, setPW] = useState("");
    function changePasswordInput(event) {
        setPW(event.target.value);
    }
    function tryLogin() {
        const info = {
            username: username,
            password: pw
        }

        axios.post("http://localhost:8000/login", info).then((res) => {
            console.log(res.data);
        })

        
    }
    return (
        <div>
            <NavBar />
            <h1>Log in</h1>
            <h2>Username</h2>
            <input
                onChange={changeUsernameInput}
                type="text"
                placeholder=""
                value={username}
            />
            <h2>Password</h2>
            <input
                onChange={changePasswordInput}
                type="password"
                placeholder=""
                value={pw}
            />
            <br/>
            <br/>
            <button className="sortButton" onClick={tryLogin}>Log In</button>
        </div>
    )
}

export default SignIn;
