import mongoose from "mongoose";
import classes from '../helpers/classFares.js'
const { Schema } = mongoose;

const TAX = 0.13;
const FEE = 0.05;


//For every route, there are 4 fares, one for each class
const fareSchema = new Schema({
    class: { type: String, required: true, enum: Object.keys(classes) },
    base: { type: Number, required: true },
    tax: { type: Number, default: TAX },
    fee: { type: Number, default: FEE },
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

fareSchema.virtual('total').get(function () {
    const classMultiplier = classes[this.class];
    const classPrice = this.base * classMultiplier;
    return classPrice + (classPrice * this.tax) + (classPrice * this.fee);
});

export default fareSchema;