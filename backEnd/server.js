const express = require("express");
const app = express();
const cors = require("cors");
//  middleware  CORS
app.use(cors());

require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());

const dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MYSQL BVMedical app CapstoneProject." });
});

//this is to import routes

const userRoutes = require("./Routes/userRoutes");
const medicalEquipmentRoutes = require("./Routes/medicalEquipmentRoutes");
const assessmentRoutes = require("./Routes/assessmentRoutes");

//this are server Routes
app.use("/api/users", userRoutes);
app.use("/api/medical-equipment", medicalEquipmentRoutes);
app.use("/api/assessments", assessmentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});
