/* // sessão
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
        btAddMago.display = "block"
    } else {
        infoProfessor.style.display = "block"
        infoAlunos.display = "none"
        btAddMago.display = "block"
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




// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

     */