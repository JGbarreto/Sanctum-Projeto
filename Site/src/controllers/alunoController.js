var alunoModel = require("../models/alunoModel");

function buscarAluno(req, res) {
    var rm = req.body.rm;

    console.log(rm + 'TO AQUI')
        
        alunoModel.buscarAluno(rm)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar os alunos.", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                });
            }

    module.exports = {
        buscarAluno
    }