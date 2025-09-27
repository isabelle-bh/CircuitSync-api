// entry point file

const express = requires("express");
const cors = requires("cors");
require('dotenv').config();

const db = require("./db"); // initializes mongodb
const raceRoutes = require("./routes/raceRoutes");

const app = express();
app.use(cors());
app.use(express.json())

app.use("/races", raceRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Listening on port ${PORT}"));