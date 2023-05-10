import mongoose from "mongoose";
const { Schema } = mongoose;

const airlineSchema = new Schema({
    name: { type: String, required: true, unique: true },
});

const Airline = mongoose.model('Airline', airlineSchema);
export default Airline;
