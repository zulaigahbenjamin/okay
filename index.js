import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./routes/routes.js";

// Assuming your './config/database.js' exports the 'connection' object
import connection from './config/database.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.get('/', (req, res)=> {
    res.json({
        msg: "You're home"
    })
})


    // Start the server after connecting to the database
    app.listen(5000, () =>
        console.log('Server running at http://localhost:5000'));
