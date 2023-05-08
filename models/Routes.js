import mongoose from "mongoose";
import Fare from "./Fare.js";
const { Schema } = mongoose;

const routeSchema = new Schema({
    origin: { type: Schema.Types.ObjectId, ref: "Airport", required: true },
    destination: { type: Schema.Types.ObjectId, ref: "Airport", required: true },
    distance: { type: Number, required: true },     // in km
    duration: { type: Number, required: true },     // in minutes
    baseFare: { type: Number, required: true },    // in USD
    fares: [Fare]
});

const Route = mongoose.model("Route", routeSchema);
export default Route;