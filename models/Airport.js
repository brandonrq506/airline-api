import mongoose from "mongoose";
const { Schema } = mongoose;

const airportSchema = new Schema({
    name: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
    iata: { type: String, required: true, unique: true, minLength: 3, maxLength: 3 },
    icao: { type: String, required: true, unique: true, minLength: 4, maxLength: 4 }
});

const Airport = mongoose.model("Airport", airportSchema);
export default Airport;