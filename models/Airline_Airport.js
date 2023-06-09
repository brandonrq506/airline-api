import mongoose from "mongoose";
const { Schema } = mongoose;

const airlineAirportSchema = new Schema({
    airline: { type: Schema.Types.ObjectId, ref: "Airline", required: true },
    airport: { type: Schema.Types.ObjectId, ref: "Airport", required: true }
});

const Airline_Airport = mongoose.model('Airline_Airport', airlineAirportSchema);
export default Airline_Airport;