import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import checkToken from './config/checkToken.js'
import usersRouter from './routes/users.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(checkToken)
app.use('/users', usersRouter)

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

app.get('/', (req, res) => {
    res.json({
        message: "Ailegal Working"
    })
})