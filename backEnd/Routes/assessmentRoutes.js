let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.assessmentController.getAssessments(res);
});

// //to GET an Assessment by id
router.get("/:id", (req, res) => {
  Controllers.assessmentController.getAssessmentById(req.params.id, res);
});

router.post("/create", (req, res) => {
  Controllers.assessmentController.createAssessment(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.assessmentController.updateAssessment(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.assessmentController.deleteAssessment(req, res);
});

module.exports = router;
