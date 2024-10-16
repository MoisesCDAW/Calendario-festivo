const festivos = [
    ["La Palma"],
    ["El Hierro"],
    ["La Gomera"],
    ["Tenerife"],
    ["Gran Canaria"],
    ["Lanzarote"],
    ["Fuerteventura"]
];

function volver(){
    open("index.html", "_self");
}

function laPalma() {
    console.log("Estamos en laPalma");
}

function elHierro() {
    console.log("Estamos en elHierro");
}

function laGomera() {
    console.log("Estamos en laGomera");
}

function tenerife() {
    console.log("Estamos en tenerife");
}

function granCanaria() {
    console.log("Estamos en granCanaria");
}

function lanzarote() {
    console.log("Estamos en lanzarote");
}

function fuerteventura() {
    console.log("Estamos fuerteventura");
}

function calendario(mes) {
    const strFecha = new Date().getFullYear()+"-"+mes+"-"+"01";
    const fecha = new Date(strFecha);

    contador = mes;
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {

            if (fecha.getMonth()==contador) {
                if (fecha.getDay()==j) {
                    document.getElementById(i+"."+j).innerHTML = fecha.getDate();
                    fecha.setDate(fecha.getDate()+1);
                } 
            }else {
                contador++;
            }
        }
    }
}

function isla(){
    let isla = localStorage.getItem("isla");
    switch (isla) {
        case "laPalma":
            laPalma();
            break;
        case "elHierro":
            elHierro();
            break;  
        case "laGomera":
            laGomera();
            break; 
        case "tenerife":
            tenerife();
            break;
        case "granCanaria":
            granCanaria();
            break;
        case "lanzarote":
            lanzarote();
            break;
        case "fuerteventura":
            fuerteventura();
            break;
    }
}

calendario(1);