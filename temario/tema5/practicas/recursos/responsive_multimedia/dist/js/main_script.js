function openNav() {
    if (document.getElementById("idNav").style.display == "") {
        document.getElementById("idNav").style.display = "block";
    } else {
        document.getElementById("idNav").style.display = "";
    }
}

document.getElementById("idUl").children[0].focus();