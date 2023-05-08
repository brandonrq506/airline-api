import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema({
    number: { type: String, required: true, minlength: 16, maxlength: 19 },
    issuer: { type: String, enum: ["Visa", "MasterCard", "American Express", "Discover"], required: true },
    type: { type: String, enum: ["Credit", "Debit"], required: true },
    balance: { type: Number, required: true, min: 0 },
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    exp: { type: Date, required: true, min: Date.now },
    cvv: { type: String, required: true, minlength: 3, maxlength: 4 },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;