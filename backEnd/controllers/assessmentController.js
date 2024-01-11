"use strict";

const Models = require("../models");
const { Assessment } = require("../models");

const getAssessments = (res) => {
  Models.Assessment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
//GET an assessment by Id
const getAssessmentById = async (id, res) => {
  try {
    const assessment = await Assessment.findByPk(id);

    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found" });
    }

    res.status(200).json(assessment);
  } catch (error) {
    res.status(500).json({ message: "Error trying to find assessment by ID " });
  }
};

const createAssessment = (data, res) => {
  // Ajustar los datos si es necesario antes de llamar a SQL, por ejemplo, validaciones, formateo, etc.
  Models.Assessment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateAssessment = (req, res) => {
  Models.Assessment.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteAssessment = (req, res) => {
  Models.Assessment.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getAssessments,
  getAssessmentById,
  createAssessment,
  updateAssessment,
  deleteAssessment,
};
