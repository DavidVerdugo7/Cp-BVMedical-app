"use strict";

const Models = require("../models");

const getLikes = (res) => {
  Models.Like.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createLike = (data, res) => {
  // TRIM VALUES BEFORE CALLING SQL unlike MongoDB's trim
  Models.Like.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateLike = (req, res) => {
  Models.Like.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
};
