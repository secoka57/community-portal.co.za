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
app.use(express.static(path.join(__dirname, "config", "GLOBAL CSS UPGRADE (Professional UI)", "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "config"));

// Database connection
require("./config/db")();

// Routes
app.use("/api/auth", require("./config/authRoutes"));
app.use("/api/user", require("./config/userRoutes"));
app.use("/api/admin", require("./config/adminRoutes"));
// app.use("/api/opportunities", require("./config/opportunityRoutes"));
// app.use("/api/reports", require("./config/reportRoutes"));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(5000, () => console.log("Server running on port 5000"));
