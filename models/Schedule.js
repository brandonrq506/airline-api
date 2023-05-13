import mongoose from "mongoose";
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    route: { type: Schema.Types.ObjectId, ref: "Route", required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
    status: { type: String, enum: ["DELAYED", "ON TIME", "DEPARTED", "ARRIVED", "CANCELED"], default: "ON TIME" },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;