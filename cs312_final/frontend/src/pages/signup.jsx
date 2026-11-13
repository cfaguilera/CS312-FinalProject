import NavBar from "../components/navBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    function changeUsernameInput(event) {
        setUsername(event.target.value);
    }
    const [pw, setPW] = useState("");
    function changePasswordInput(event) {
        setPW(event.target.value);
    }
    function trySignup() {
        const info = {
            username: username,
            password: pw
        }
        
        axios.post("http://localhost:8000/signup", info).then((res) => {
            if(res.data.valid == "true") {
                navigate("/", {state: {user: username}});
            }
        })

        
    }
    
    return (
        <>
        <NavBar />
        <h1>Create an Account</h1></>
    )
}

export default SignUp;
