import mongoose from "mongoose";
import { capitalize } from "../helpers/utils.js";
const { Schema } = mongoose;

const customerSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true, minLength: 12 },
    phoneNumber: { type: String, minLength: 8, maxLength: 15 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    dob: { type: Date, required: true, max: () => new Date().setFullYear(new Date().getFullYear() - 18) },
    roles: {
        User: { type: Number, default: 1 },
        Editor: Number,
        Admin: Number
    },
    refreshToken: String
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

customerSchema.virtual("fullname").get(function () {
    const fullName = this.firstName + " " + this.lastName;
    return capitalize(fullName);
});

//To do: This does not get the year propertly as does not consider months.
customerSchema.virtual("age").get(function () {
    return new Date().getFullYear() - this.dob.getFullYear();
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;