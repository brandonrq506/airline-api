import mongoose from "mongoose";
const { Schema } = mongoose;

const airlineRouteSchema = new Schema({
    airline: { type: Schema.Types.ObjectId, ref: "Airline", required: true },
    route: { type: Schema.Types.ObjectId, ref: "Route", required: true }
});

const Airline_Route = mongoose.model('Airline_Route', airlineRouteSchema);
export default Airline_Route;