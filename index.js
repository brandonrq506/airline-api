import errorHandler from "./middleware/errorHandler.js";
import { corsOptions } from "./config/cors.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;



//Middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.get('/api/v1', (req, res) => {
    res.send('Hello to Memories API');
});


app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));

/*
Add custome error message to Schema validation.

*/