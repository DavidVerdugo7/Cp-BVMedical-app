"use strict";

const User = require("./users");
const MedicalEquipment = require("./medicalEquipment");

// const Assessment = require("./assessments");

async function init() {
  await User.sync();
  await MedicalEquipment.sync();

  // await Assessment.sync();
}

init();

module.exports = {
  User, // Exporta el modelo User
  MedicalEquipment,

  // Assessment,
};
