import { corsOptions } from "./config/cors.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
// import v1-routes from "./routes/v1-routes.js";
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


//If I import routes here, I will have to add the /api/v1 to all of them + the route
//If I have that in a different folder then I can just use the routes as they are.
//The problem is, I will have to use my middlewares in the routes file, which is not ideal.
app.get('/api/v1', (req, res) => {
    res.send('Hello to Memories API');
});



mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));