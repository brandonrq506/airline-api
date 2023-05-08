import mongoose from "mongoose";
import { capitalize } from "../helpers/utils.js";
const { Schema } = mongoose;

const customerSchema = new Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true, minLength: 12 },
    phone_number: { type: String, minLength: 8, maxLength: 15 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    dob: { type: Date, required: true, min: () => new Date().setFullYear(new Date().getFullYear() - 18) },
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
    const fullName = this.first_name + " " + this.last_name;
    return capitalize(fullName);
});

customerSchema.virtual("age").get(function () {
    return (new Date()).getFullYear() - this.dob.getFullYear();
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;