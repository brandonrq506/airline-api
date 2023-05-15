import errorHandler from "./middleware/errorHandler.js";
import credentials from './middleware/credentials.js'
import v1Routes from "./routes/v1-routes.js";
import { corsOptions } from "./config/cors.js";
import cookieParser from "cookie-parser";
import { logger } from "./middleware/logger.js";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;



//Middlewares
app.use(helmet());
app.use(logger);
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
Features to add:

Add custom error message to Schema validation.
Using Graphs Theory we can introduce layover functionality.


Schemas:
Would it been better for 'foreign keys' to be called customerId, instead of customer, routeId instead of route?

Fare: Maybe it was better to have Fare as its own model, and use transactions to create the 4 fares for each route.
Fare does not update when route price is updated.

Schedule: Departure must be earlier than arrival

Customer:
-. Hide the password and refreshToken from the response. But have methods that allow access from Back-end.
-. Add cascade delete. So delete all cards and tickets when deleting customer from DB.

TODO:
- How to paginate information?
- Testing
*/