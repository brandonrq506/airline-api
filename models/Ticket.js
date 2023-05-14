import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import fareSchema from "./Fare.js";
const { Schema } = mongoose;


const ticketSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true, autopopulate: true },
    route: { type: Schema.Types.ObjectId, ref: "Route", required: true, autopopulate: true },
    schedule: { type: Schema.Types.ObjectId, ref: "Schedule", required: true, autopopulate: true },
    seat: { type: String, required: true },
    fare: { type: fareSchema, required: true },
},
    {
        timestamps: true
    }
);

ticketSchema.plugin(mongooseAutoPopulate);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;