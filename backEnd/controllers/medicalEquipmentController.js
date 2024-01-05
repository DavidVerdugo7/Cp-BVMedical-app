"use strict";

const Models = require("../models");

const getMedicalEquipment = (res) => {
  Models.MedicalEquipment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//IN THIS TABLE THE USER CAN NOT DO POST, PUT OR DELETE, THIS WILL BE MANAGE DIRECLTY IN DB

// const createPost = (data, res) => {
//   Models.Post.create(data)
//     .then(function (data) {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// const updatePost = (req, res) => {
//   Models.Post.update(req.body, { where: { id: req.params.id } })
//     .then(function (data) {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// const deletePost = (req, res) => {
//   Models.Post.destroy({ where: { id: req.params.id } })
//     .then(function (data) {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

module.exports = {
  getMedicalEquipment,
};
