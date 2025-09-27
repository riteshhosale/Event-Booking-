const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
require("dotenv").config(); // Load env vars at the very top

const app = express();

// Middleware setup
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(session({
    secret: "event_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

// Make currentUser available in all templates
app.use((req, res, next) => {
    res.locals.currentUser = req.session.userId || null;
    next();
});

// MongoDB connection (only once, no duplicate)
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/events", require("./routes/eventRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
