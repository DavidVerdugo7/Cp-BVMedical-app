"use strict";

const User = require("./users");

// const Assessment = require("./assessments");
// const MedicalEquipment = require("./medicalEquipment");

async function init() {
  await User.sync();

  // await Assessment.sync();
  // await MedicalEquipment.sync();
}

init();

module.exports = {
  User, // Exporta el modelo User

  // Assessment,
  // MedicalEquipment,
};
