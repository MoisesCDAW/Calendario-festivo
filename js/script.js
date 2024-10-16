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

function calendario() {
    var isla = localStorage.getItem("isla");

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

calendario();