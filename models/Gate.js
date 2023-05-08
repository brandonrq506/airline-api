import mongoose from "mongoose";
const { Schema } = mongoose;

const gateSchema = new Schema({
    number: { type: String, required: true },
    airport: { type: Schema.Types.ObjectId, ref: "Airport", required: true },
    state: { type: String, required: true, enum: ["Open", "Closed"], default: "Closed" },
});

const Gate = mongoose.model("Gate", gateSchema);
export default Gate;