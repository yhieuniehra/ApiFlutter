const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
