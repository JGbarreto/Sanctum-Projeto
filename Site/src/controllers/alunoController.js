var alunoModel = require("../models/alunoModel");

function buscarAluno(req, res) {
    var rm = req.body.rm;

    console.log(rm + 'TO AQUI')
        
        alunoModel.buscarAluno(rm)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    
                    if (resultado.length > 0) {
                        res.json(resultado);
                    }
                        
                    
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar o Aluno! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    module.exports = {
        buscarAluno
    }