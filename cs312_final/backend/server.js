import pg from "pg";
import express from "express"
const blogDatabase = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "streamingdb",
    password: "SixSeven67!",
    port: 5432,
});

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server running on port ' + port);
});

