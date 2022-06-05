// sessão
function validarSessao() {
    // aguardar();

    var rm = sessionStorage.RM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cargo = sessionStorage.CARGO;
    var rep = sessionStorage.REP;
    

    var nomeMago = document.getElementById("nomeMago");
    var cargoMago = document.getElementById("cargoMago")
    var alunoProf = document.getElementById("alunoProf");
    var repMago = document.getElementById("rep")
    
   
if (rm != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        nomeMago.innerHTML = nome;
        cargoMago.innerHTML = cargo;
        repMago.innerHTML = rep;
        
        // finalizarAguardar();
    } else {
        window.location = "/public/login.html";
    }

    if (cargo == 'Mago Supremo' || cargo == 'Mago Sênior') {
        alunoProf.innerHTML = 'Seus Alunos';
        infoProfessor.style.display = "none"
        infoAlunos.display = "block"
    } 
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

