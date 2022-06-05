var professorModel = require("../models/professorModel");

function buscarProf(req, res) {
    var rm = req.body.rm;

    console.log(rm + 'TO AQUI')
        
        professorModel.buscarProf(rm)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar o professor! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    module.exports = {
        buscarProf
    }