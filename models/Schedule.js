import mongoose from "mongoose";
const { Schema } = mongoose;

//Flight Schedule
const scheduleSchema = new Schema({
    route: { type: Schema.Types.ObjectId, ref: "Route", required: true },
    departure: { type: Date, required: true },
    status: { type: String, required: true, enum: ["DELAYED", "ON TIME", "DEPARTED", "ARRIVED", "CANCELED"] },
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

scheduleSchema.virtual("arrival").get(function () {
    return new Date(this.departure.getTime + (this.route.duration * 60 * 1000));
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;