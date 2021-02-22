function openNav() {
    if (document.getElementById("idNav").style.display == "") {
        document.getElementById("idNav").style.display = "block";
    } else {
        document.getElementById("idNav").style.display = "";
    }
}

function cambiarTema() {
    if (document.body.style.backgroundColor == "rgb(250, 250, 250)" || document.body.style.backgroundColor == "") {
        document.body.style.backgroundColor = "#242424";
        document.getElementById("idTemaLi").className = "cambiar-tema-li tema-claro";
        document.body.style.color = "#fafafa";
    } else {
        document.body.style.backgroundColor = "#fafafa";
        document.getElementById("idTemaLi").className = "cambiar-tema-li tema-oscuro";
        document.body.style.color = "black";
    }
}

function validarFormulario() {
    if (document.getElementById("ciudad").value == "SELECCIONAR") {
        alert("Selecciona una ciudad");
        return false;
    } else {
        return true;
    }
}

function mostrarDialog() {
    document.getElementById("confirmar_dialog").showModal();
}

function cerrarDialog() {
    document.getElementById("confirmar_dialog").close();
}

function intercambiarValoresMasculino() {
    document.getElementById("masculino").setAttribute("aria-checked", "true");
    document.getElementById("femenino").setAttribute("aria-checked", "false");
}

function intercambiarValoresFemenino() {
    document.getElementById("masculino").setAttribute("aria-checked", "false");
    document.getElementById("femenino").setAttribute("aria-checked", "true");
}

function intercambiarValorPremium() {
    if (document.getElementById("premium").checked) {
        document.getElementById("premium").setAttribute("aria-checked", "true");
    } else {
        document.getElementById("premium").setAttribute("aria-checked", "false");
    }
}