const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");

const router = express.Router();

// Book event
router.post("/:eventId", async (req, res) => {
    const { seats } = req.body;
    const event = await Event.findById(req.params.eventId);

    if (event.availableSeats >= seats) {
        await Booking.create({ userId: req.session.user._id, eventId: event._id, seatsBooked: seats });
        event.availableSeats -= seats;
        await event.save();
        res.redirect("/bookings/my");
    } else {
        res.send("Not enough seats available");
    }
});

// User bookings
router.get("/my", async (req, res) => {
    const bookings = await Booking.find({ userId: req.session.user._id }).populate("eventId");
    res.render("bookings", { bookings });
});

module.exports = router;