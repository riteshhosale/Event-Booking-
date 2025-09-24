const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// List all events
router.get("/", async (req, res) => {
    const events = await Event.find();
    res.render("events", { events });
});

// Admin create event
router.get("/new", (req, res) => res.render("newEvent"));
router.post("/", async (req, res) => {
    await Event.create(req.body);
    res.redirect("/events");
});

// View event
router.get("/:id", async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.render("eventDetail", { event });
});

module.exports = router;