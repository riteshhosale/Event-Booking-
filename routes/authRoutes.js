const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");


const router = express.Router();


router.get("/register", (req, res) => res.render("register"));
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    await User.create({ username, email, password });
    res.redirect("/login");
});

router.get("/login", (req, res) => res.render("login"));
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect("/events");
    } else {
        res.send("Invalid credentials");
    }
});


router.get("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/login"));
});

module.exports = router;