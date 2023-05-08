import mongoose from "mongoose";
const { Schema } = mongoose;

const airportSchema = new Schema({
    name: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
    //city: { type: Schema.Types.ObjectId, ref: "City", required: true },
    iata: { type: String, required: true, unique: true, minlegth: 3, maxlength: 3 },
    icao: { type: String, required: true, unique: true, minlegth: 4, maxlength: 4 }
});

const Airport = mongoose.model("Airport", airportSchema);
export default Airport;