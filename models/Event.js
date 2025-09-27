const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    location: String,
    price: Number,
    availableSeats: Number
});

module.exports = mongoose.model("Event", eventSchema);