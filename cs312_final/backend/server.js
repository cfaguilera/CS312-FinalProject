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

    console.log("cALLED")
    let thisMovie = await streamDB.query("SELECT * FROM movies WHERE movie_id='" + req.body.movie_id + "'");
    //res.json(thisMovie)
    console.log(thisMovie)
    let test = {
        "title": "movie title",
        "desc": "movie desc",
        "year": "movie year",
        "rating": "rating"
    }
    res.json(thisMovie.rows[0])


});






app.listen(port, () => {
    console.log('Server running on port ' + port);
});
