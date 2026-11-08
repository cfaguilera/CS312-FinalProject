import pg from "pg";
import express from "express"
const streamDB = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "streamingdb",
    password: "SixSeven67!",
    port: 5432,
});
const app = express();
const port = 3000;
let currUser = null;
streamDB.connect();

app.get("/getmovie", (req, res) => {

    
    let thisMovie = streamDB.query("SELECT * FROM movies WHERE movie_id='" + req.body.movie_id + "'");
    res.json(thisMovie)

});






app.listen(port, () => {
    console.log('Server running on port ' + port);
});

