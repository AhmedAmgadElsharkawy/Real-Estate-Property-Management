import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/i,
    },
    phone: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    bedrooms:{
        type:Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    furniture:{
        type:String,
    },
    propertyType:{
        type:String,
    },
    location:{
        type:String,
    },
    status:{
        type:String,
    },
    exteriorFeatures:{
        type:[String],
    },
    interiorFeatures:{
        type:[String],
    },
    description:{
        type:String,
    },
})

const Property = mongoose.model("Property",propertySchema)

export default Property