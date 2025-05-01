import express from "express";
import cors from "cors";
import dbConfig from "./app/config/db.config.js";
import tutorialRoutes from "./app/routes/tutorial.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
 
const app = express();
 
const corsOptions = {
    origin: "https://mern-tutorial-frontend-52v3.onrender.com",
};
 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Tutorial Application." });
});
 
// Routes
tutorialRoutes(app);
 
// Sync database
mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});