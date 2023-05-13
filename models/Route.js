import mongoose from "mongoose";
import classes from '../helpers/classFares.js'
import fareSchema from "./Fare.js";
const { Schema } = mongoose;

const routeSchema = new Schema({
    origin: { type: Schema.Types.ObjectId, ref: "Airport", required: true },
    destination: { type: Schema.Types.ObjectId, ref: "Airport", required: true },
    distance: { type: Number, required: true },     // in km
    duration: { type: Number, required: true },     // in minutes
    baseFare: { type: Number, required: true },    // in USD
    fares: [fareSchema]
});

routeSchema.pre("save", function (next) {
    const route = this;

    if (route.fares.length === 0)
        route.fares = Object.keys(classes).map(c => ({ class: c, base: route.baseFare }));

    next();
});

const Route = mongoose.model("Route", routeSchema);
export default Route;