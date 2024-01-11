const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { Sequelize } = require("./dbConnect");
// const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const dbConnect = require("./dbConnect");

const userRoutes = require("./Routes/userRoutes");
const medicalEquipmentRoutes = require("./Routes/medicalEquipmentRoutes");
const assessmentRoutes = require("./Routes/assessmentRoutes");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await Sequelize.query(
      `SELECT * FROM users WHERE email = ? and PASSWORD = ?`,
      { replacements: [email, password], type: Sequelize.QueryTypes.SELECT }
    );
    if (result.length > 0) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MYSQL BVMedical app CapstoneProject." });
});

//this are server Routes
app.use("/api/users", userRoutes);
app.use("/api/medical-equipment", medicalEquipmentRoutes);
app.use("/api/assessments", assessmentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
  console.log(" ~~ Welcome to JD's Capstone Project! ~~");
});
