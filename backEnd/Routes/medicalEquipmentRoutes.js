let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.medicalEquipmentController.getMedicalEquipment(res);
});

//to GET an MedicalEquipment by id
router.get("/:id", (req, res) => {
  Controllers.medicalEquipmentController.getMedicalEquipmentById(
    req.params.id,
    res
  );
});

//IN THIS TABLE THE USER CAN NOT DO POST, PUT OR DELETE, THIS WILL BE MANAGE DIRECLTY IN DB

// router.post("/create", (req, res) => {
//   Controllers.postController.createPost(req.body, res);
// });

// router.put("/:id", (req, res) => {
//   Controllers.postController.updatePost(req, res);
// });

// router.delete("/:id", (req, res) => {
//   Controllers.postController.deletePost(req, res);
// });

module.exports = router;
