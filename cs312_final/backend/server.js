import pg from "pg";
import express from "express"
import bodyParser from "body-parser";
import cors from "cors";

import { dirname } from "path";
import { fileURLToPath } from "url";
const streamDB = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "streamingdb",
    password: "SixSeven67!",
    port: 5432,
});
const app = express();
const port = 8000;
let currUser = null;
streamDB.connect();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/getmovie", async (req, res) => {

    let thisMovie = await streamDB.query("SELECT * FROM movies WHERE movie_id='" + req.body.movie_id + "'");
    //res.json(thisMovie)
    //console.log(thisMovie.rows[0])
    let test = {
        "title": "movie title",
        "desc": "movie desc",
        "year": "movie year",
        "rating": "rating"
    }
    res.json(thisMovie.rows[0])


});

app.post("/signup", async (req, res) => {
    let isValid = await streamDB.query("SELECT * FROM users WHERE username='" + req.body.username + "'");
    if (isValid.rows == undefined || req.body.pw == "")
    {
        console.log("username exists")
        res.json({"valid": "false"});
    }
    else
    {
        res.json({"valid": "true"});
        await streamDB.query("INSERT INTO users (username, genrepref, password) VALUES ($1, $2, $3)", [req.body.username, null, req.body.password]);
    }
})

app.post("/login", async (req, res) => {
    let validName = await streamDB.query("SELECT * FROM users WHERE username='" + req.body.username + "'");
    let correctPw = await streamDB.query("SELECT password FROM users WHERE username='" + req.body.username + "'");
    if (correctPw != undefined)
    {
        //console.log(correctPw.rows[0].password)
    }
    
    if (validName.rows == undefined)
    {
        console.log("Invalid Username")
        return;
    }
    else
    {
        let correctPw = await streamDB.query("SELECT password FROM users WHERE username='" + req.body.username + "'");
        if (correctPw.rows != undefined)
        {
            if (correctPw.rows[0].password == req.body.password)
            {
                res.json({"valid": "true"});
            }
        }
        
    }
    res.json({"valid": "false"});

})




app.listen(port, () => {
    console.log('Server running on port ' + port);
});
