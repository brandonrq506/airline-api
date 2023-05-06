import mongoose from "mongoose";
const { Schema } = mongoose;

const gateSchema = new Schema({
    number: { type: String, required: true },
    airport: { type: Schema.Types.ObjectId, ref: "Airport", required: true }
});

const Gate = mongoose.model("Gate", gateSchema);
export default Gate;