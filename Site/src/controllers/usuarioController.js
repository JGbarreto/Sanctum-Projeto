var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function reservar(req, res) {

    var rm = req.body.rm;
    var nomeLivro = req.body.nomeLivro;
    var genero = req.body.genero;
    var dataReserva = req.body.dataReserva;

    usuarioModel.reservar(rm, nomeLivro, genero, dataReserva)
        .then(function (resultado) {
            
                res.status(200).json(resultado);
            
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a reserva do livro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarLivro(req, res) {

    var rm = req.body.rm
    

    usuarioModel.buscarLivro(rm)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta dos livros! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar(req, res) {

    var rm = req.body.rmServer
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var senha = req.body.senhaServer;
    var rep = req.body.repServer;

    usuarioModel.listar(rm, nome, cargo, senha, rep)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var rm = req.body.rmServer;
    var senha = req.body.senhaServer;

    if (rm == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(rm, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("RM e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var rm = req.body.rmServer
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var senha = req.body.senhaServer;
    var rep = req.body.repServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (rep == undefined) {
        res.status(400).send("Sua rep está undefined!");
    } else if (rm == undefined) {
        res.status(400).send("Seu rm está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(rm, nome, cargo, senha, rep)
            .then(
                function (resultado) {
                    
                        res.status(200).json(resultado);
                        
                    
                    
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    buscarLivro,
    reservar
}