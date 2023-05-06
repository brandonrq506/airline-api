import mongoose from "mongoose";

const gateSchema = new mongoose.Schema({
    number: { type: String, required: true },
    airport: { type: mongoose.Schema.Types.ObjectId, ref: "Airport", required: true }
});

const Gate = mongoose.model("Gate", gateSchema);
export default Gate;