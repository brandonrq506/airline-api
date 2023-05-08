import mongoose from "mongoose";
const { Schema } = mongoose.Schema;

const airlineSchema = Schema({
    name: { type: String, required: true }
});

const Airline = mongoose.model('Airline', airlineSchema);
export default Airline;
