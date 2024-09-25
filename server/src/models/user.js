import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/i, // Validator: Must match email format
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String,         // String type for gender
        enum: ['Male', 'Female', 'Other'], // Validator: Must be one of these values
        required: true        // Gender is required
    },
    city: {
        type: String
    }
})

const User = mongoose.model("User",userSchema)

export default User