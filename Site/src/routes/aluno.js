var express = require("express");
var router = express.Router();

var alunoController = require("../controllers/alunoController");

router.post("/buscarAluno", function (req, res) {
    alunoController.buscarAluno(req, res);
    
});

module.exports = router;