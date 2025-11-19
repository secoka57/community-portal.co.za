const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");

// Database connection
require("./config/db")();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/opportunities", require("./routes/opportunityRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(5000, () => console.log("Server running on port 5000"));
