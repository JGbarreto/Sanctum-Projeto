var express = require("express");
var router = express.Router();

var professorController = require("../controllers/professorController");

router.post("/buscarProf", function (req, res) {
    professorController.buscarProf(req, res);
    
});

module.exports = router;