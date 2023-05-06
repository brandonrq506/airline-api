import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    number: { type: String, required: true, min: 16, max: 19 },
    issuer: { enum: ["Visa", "MasterCard", "American Express", "Discover"], required: true },
    type: { enum: ["Credit", "Debit"], required: true },
    balance: { type: Number, required: true, min: 0 },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    exp: { type: Date, required: true }
});

const Card = mongoose.model("Card", cardSchema);
export default Card;