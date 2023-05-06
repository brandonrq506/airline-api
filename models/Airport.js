import mongoose from "mongoose";

const airportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
    iata: { type: String, required: true, unique: true, minlegth: 3, maxlength: 3 },
    icao: { type: String, required: true, unique: true, minlegth: 4, maxlength: 4 }
});

const Airport = mongoose.model("Airport", airportSchema);
export default Airport;