var database = require("../database/config")

function buscarProf(rm) {
    console.log(rm + 'TO AQUI')
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", rm)
    var instrucao = `
    select professor.nome as nomeProf, professor.cargo as cargoProf, professor.rep as repProf from mago as mago join mago as professor on professor.rm = mago.mestre where mago.rm = ${rm};
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarProf
};