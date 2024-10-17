const festivos = [
    // YYYY-MM-DD
    {isla:"La Palma", 
        dia:[5, 15, 12, 8], 
        mes:[8, 8, 2, 9],
        celebracion: ["Nuestra Señora de las Nieves", 
            "La Fiesta de la Morena",
            "Día de Los Indianos",
            "Danza del Diablo"],
        descripcion: ["Es un culto que llegó a La Palma tras la conquista de la isla en el siglo XV", 
            "Se remontan al siglo XVI, cuando las mujeres del municipio se reunían para vender o intercambiar el pescado capturado",
            "Sus orígenes se remontan al siglo XIX, cuando se recibía con festejos a los isleños que habían emigrado a Cuba buscando las Américas y volvían presumiendo de las riquezas que habían logrado en su aventura.",
            "toma el protagonismo, una antigua costumbre que refleja la lucha entre el bien, representado por la Virgen de la Candelaria, y el mal, personificado por el Diablo."],
        costumbres: ["Cada 5 años se realiza una bajada de la virgen al templo en S/C La Palma desde su santuario acompañada de manifestaciones culturales como la Danza de los Enanos",
            "Los asistentes visten cholas y bañadores, disfrutando del ambiente festivo en la playa. Destaca el 'baile de la Morena', que se realiza en la arena de la misma playa.",
            "Comienza a las 12:00 de la mañana en un acto conocido como “La Espera”, con el que se hace un recibimiento a los indianos.Desde entonces, durante toda la jornada, sonará la música cubana y correrá la caña de azúcar, la melaza y los mojitos.",
            "El protagonista es una figura maléfica, que escupe fuegos artificiales por todas partes. Su llegada la anuncian una serie de gigantes y cabezudos que interrumpen la verbena sin previo aviso."]
    },
    {isla:"El Hierro", 
        dia:[24], 
        mes:[9],
        celebracion: ["Bajada de la Virgen de los Reyes"],
        descripcion: ["Es una de las más emblemáticas de la isla y ocurre cada 4 años"],
        costumbres: ["Los habitantes trasladan a la virgen desde su satuario en La Dehesa hasta la capital Valverde"]
    },
    {isla:"La Gomera", 
        dia:[7], 
        mes:[10],
        celebracion: ["Nuestra Señora de Guadalupe."],
        descripcion: ["Es una advocación de la Virgen María, patrona de la isla"],
        costumbres: ["Bajada de la Virgen de Guadalupe desde su santuario de Puntallana hasta la capital de la isla, San Sebastián de La Gomera"]
    },
    {isla:"Tenerife", 
        dia:[2], 
        mes:[2],
        celebracion: ["Nuestra Virgen de la Candelaria"],
        descripcion: ["Conocida popularmente como La Morenita y como el tesoro más grande del archipiélago canario"],
        costumbres: ["Destaca el rito de la procesión de las candelas, donde el fuego es protagonista."]
    },
    {isla:"Gran Canaria", 
        dia:[9], 
        mes:[9],
        celebracion: ["Nuestra Señora del Pino."],
        descripcion: ["Es una de las advocaciones marianas que representan a la Virgen María. Ubicada en la Basílica del municipio de Teror"],
        costumbres: ["Se celebra la Romería del Pino, una colorida procesión que reúne a participantes de todos los municipios de la isla y de las diferentes islas del archipiélago canario."]
    },
    {isla:"Lanzarote", 
        dia:[16], 
        mes:[9],
        celebracion: ["Nuestra Señora de los Volcanes"],
        descripcion: ["La devoción a la Virgen de Los Volcanes, es la más difundida y practicada en toda la isla de Lanzarote."],
        costumbres: ["Destaca la solemne eucaristía y la posterior procesión de la Virgen. Se festeja con una Romería el día anterior"]
    },
    {isla:"Fuerteventura", 
        dia:[20], 
        mes:[9],
        celebracion: ["Nuestra Señora de la Peña"],
        descripcion: ["Fue llevada a Fuerteventura por conquistadores de Normandía en el siglo XV, se cree que en torno al año 1402."],
        costumbres: ["La festividad combina actos religiosos como misas y procesiones, incluyendo verbenas, desfiles de carretas y actuaciones musicales"]
    }
];


function volver(){
    // localStorage.clear();
    open("index.html", "_self");
}

function marcaFavorito(boton) {

    if (boton.classList=="favorito") {
        document.getElementById(boton.id).classList.add("no-favorito");
        localStorage.setItem(boton.id, "no-favorito");
    }

    if (boton.classList=="no-favorito") {
        document.getElementById(boton.id).classList.add("favorito");
        localStorage.setItem(boton.id, "favorito");
    }
    
    location.reload();
}

function pintaFestivos(numIsla) {
    let mes = localStorage.getItem("mes");
    let isla = festivos[numIsla];
    let indices = [];

    for (let i = 0; i < isla.mes.length; i++) {
        if (mes==isla.mes[i]) {
            indices.push(i);
        }
    }

    for (let i = 0; i < indices.length; i++) {
        for (let j = 0; j <= 4; j++) {
            for (let k = 0; k <= 6; k++) { 
                let valor = document.getElementById(j+"."+k).value;
                if (valor==isla.dia[indices[i]] && valor!=null) {
                    document.getElementById(j+"."+k).title = isla.celebracion[indices[i]];
                    document.getElementById(j+"."+k).classList.add("festivo");
                }
            }
        }
    }
}


function escribeFestivos(numIsla){
    let str = "";
    let isla = festivos[numIsla];
    let botonFav = "<td><button id='favorito' onclick=marcaFavorito(this)>Favorito</button></td>";

    for (let i = 0; i < isla.dia.length; i++) {
        str = "<tr><td>"+isla.celebracion[i]+"</td><td>"+isla.dia[i]+"</td><td>"+isla.mes[i]+"</td><td>"+isla.descripcion[i]+"</td><td>"+isla.costumbres[i]+"</td>"+
        botonFav+"</tr>";
        document.getElementById("diasFestivos").innerHTML += str;
        document.getElementById("favorito").id += i;

        if (localStorage.getItem("favorito"+i)=="favorito") {
            document.getElementById("favorito"+i).classList.add("favorito");
        }else {
            document.getElementById("favorito"+i).classList.add("no-favorito");
        }
    }
}


function avanzarRetroceder(valor){
    let mes = localStorage.getItem("mes");
    
    if (valor=="avanzar") {
        mes++;
        if (mes>12) {
            mes = 1;
        }
    }else {
        mes--;
        if (mes<1) {
            mes = 12;
        }
    }

    localStorage.setItem("mes", mes);
    open("calendario.html", "_self");
}


function calendario() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mes = localStorage.getItem("mes");

    if (mes==null) {
        mes=1;
    }

    document.getElementById("mes").innerHTML = meses[mes-1];
    const strFecha = "2024-"+mes+"-"+"01";
    const fecha = new Date(strFecha);

    contador = mes;
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {

            if (fecha.getMonth()+1==contador) {
                if (fecha.getDay()==j) {
                    document.getElementById(i+"."+j).value = fecha.getDate();
                    document.getElementById(i+"."+j).innerHTML = fecha.getDate();
                    fecha.setDate(fecha.getDate()+1);
                } 
            }else {
                contador++;
            }
        }
    }

    localStorage.setItem("mes", mes);
    
    isla();
}


function isla(){
    let isla = localStorage.getItem("isla");
    switch (isla) {
        case "laPalma":
            pintaFestivos(0);
            escribeFestivos(0);
            break;
        case "elHierro":
            pintaFestivos(1);
            escribeFestivos(1);
            break;  
        case "laGomera":
            pintaFestivos(2);
            escribeFestivos(2);
            break; 
        case "tenerife":
            pintaFestivos(3);
            escribeFestivos(3);
            break;
        case "granCanaria":
            pintaFestivos(4);
            escribeFestivos(4);
            break;
        case "lanzarote":
            pintaFestivos(5);
            escribeFestivos(5);
            break;
        case "fuerteventura":
            pintaFestivos(6);
            escribeFestivos(6);
            break;
    }
}

calendario();