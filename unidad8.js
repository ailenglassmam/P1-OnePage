function mostrarInfo(info1) {
    var infoExtra1 = document.getElementById(info1);

    if(infoExtra1.style.display == 'none') {
        infoExtra1.style.display = 'block';
    } else {
        infoExtra1.style.display = 'none';
    }
}

function ocultarInfo(info1) {
    var infoExtra1 = document.getElementById(info1);

    if(infoExtra1.style.display == 'block') {
        infoExtra1.style.display = 'none';
    } else {
        infoExtra1.style.display = 'block';
    }
}
