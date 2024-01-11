const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

//to GET an User by id
router.get("/:id", (req, res) => {
  Controllers.userController.getUserById(req.params.id, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

// Registrar un nuevo usuario
router.post("/register", (req, res) => {
  Controllers.userController.registerUser(req.body, res);
});

// Autenticar un usuario existente
router.post("/login", (req, res) => {
  Controllers.userController.loginUser(req.body, res);
});

module.exports = router;
