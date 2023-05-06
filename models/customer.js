import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true, lowercase: true, trim: true },
    last_name: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true, minLength: 12 },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    dob: { type: Date, required: true },
    roles: {
        User: { type: Number, default: 1 },
        Editor: Number,
        Admin: Number
    },
    refreshToken: String
},
    {
        virtuals: {
            fullname: {
                get() { return this.first_name + " " + this.last_name; }
            },
            age: {
                get() { return (new Date()).getFullYear() - this.dob.getFullYear(); }
            }
        }
    }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;