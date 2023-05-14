import errorHandler from "./middleware/errorHandler.js";
import credentials from './middleware/credentials.js'
import v1Routes from "./routes/v1-routes.js";
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
app.use(credentials); //Use before CORS
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use('/api/v1', v1Routes);


app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));

/*
Add customer error message to Schema validation.
Using Graphs Theory we can introduce layover functionality.
*/