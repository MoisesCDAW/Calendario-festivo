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

function marcaFavorito(boton) {

    if (boton.className=="no-favorito") {
        document.getElementById(boton.id).classList.add("favorito");
        localStorage.setItem(boton.id, "favorito");
    }

    if (boton.className=="favorito") {
        document.getElementById(boton.id).classList.add("no-favorito");
        localStorage.setItem(boton.id, "no-favorito");
    }

    if (localStorage.getItem("isla")==7) {
        escribeTodos();
    }else {
        escribeFestivos();
    }
}

function escribeTodos() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let isla = 0;

    document.getElementById("contenedor-info").innerHTML = "";
    for (let a = 0; a < festivos.length; a++) {
        isla = festivos[a];
        for (let i = 0; i < isla.dia.length; i++) {
            let str = "<div class='infoIslas' id='diasFestivos'><div class='fecha'><h2>"+meses[isla.mes[i]-1]+"</h2><p>"+isla.dia[i]+"</p></div><div class='islaCelebracion'><div class='titulos'><h1>"+isla.isla+"</h1><p>"+isla.celebracion[i]+"</p></div><p>"+isla.descripcion[i]+"<br>"+isla.costumbres[i]+"</p></div></div>";
            document.getElementById("contenedor-info").innerHTML += str;
        }
    }
}

function pintaTodos() {
    let mes = localStorage.getItem("mes");
    let dias = document.getElementsByClassName("dia");
    let islasDias = [];
    let celebracion = {};

    for (let i = 0; i < festivos.length; i++) {
        for (let j = 0; j < festivos[i].dia.length; j++) {
            if (festivos[i].mes[j]==mes) {
                islasDias.push(festivos[i].dia[j]);
                celebracion[festivos[i].dia[j]] = festivos[i].isla +": "+ festivos[i].celebracion[j];
            }     
        }  
    }

    islasDias.sort((a,b)=>a-b);

    for (let j = 0; j < dias.length; j++) {
        let posicion = document.getElementById(dias[j].id);

        if (dias[j].value!=null && dias[j].value == islasDias[0]) {
            posicion.title = celebracion[islasDias[0]];
            posicion.classList.add("festivo")
            islasDias.shift();
        }else {
            posicion.classList.remove("festivo")
        }
    }
}


function escribeFestivos(){
    let isla = festivos[localStorage.getItem("isla")];
    let botonFav = "<button id='favorito' onclick=marcaFavorito(this)></button>";
    let nomIsla = localStorage.getItem("isla");
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    document.getElementById("contenedor-info").innerHTML = "";
    for (let i = 0; i < isla.dia.length; i++) {
        let str = "<div class='infoIslas' id='diasFestivos'><div class='fecha'><h2>"+meses[isla.mes[i]-1]+"</h2><p>"+isla.dia[i]+"</p></div><div class='islaCelebracion'><div class='titulos'><h1>"+isla.isla+"</h1><p>"+isla.celebracion[i]+"</p></div><p>"+isla.descripcion[i]+"<br>"+isla.costumbres[i]+"</p>"+botonFav+"</div></div>";
        document.getElementById("contenedor-info").innerHTML += str;
        document.getElementById("favorito").id = nomIsla +"favorito"+ i;

        if (localStorage.getItem(nomIsla+"favorito"+i)=="favorito") {
            document.getElementById(nomIsla+"favorito"+i).classList.add("favorito");
        }else {
            document.getElementById(nomIsla+"favorito"+i).classList.add("no-favorito");
        }
    }
}


function pintaFestivos() {
    let mes = localStorage.getItem("mes");
    let isla = festivos[localStorage.getItem("isla")];
    let dias = document.getElementsByClassName("dia");
    let islaDias = [];

    for (let i = 0; i < isla.dia.length; i++) {
        if (isla.mes[i]==mes) {
            islaDias.push(isla.dia[i]);
        }     
    }

    for (let j = 0; j < dias.length; j++) {
        let posicion = document.getElementById(dias[j].id);

        if (dias[j].value!=null && dias[j].value == islaDias[0]) {
            posicion.title = isla.celebracion[isla.dia.indexOf(posicion.value)];
            posicion.classList.add("festivo");
            islaDias.shift();
        }else {
            posicion.classList.remove("festivo");
        }
    }
}


function avanzar(){
    let mes = localStorage.getItem("mes");
    mes++;
    if (mes>12) {
        mes = 1;
    }
    localStorage.setItem("mes", mes);
    calendario();
}

function retroceder(){
    let mes = localStorage.getItem("mes");
    mes--;
    if (mes<1) {
        mes = 12;
    }
    localStorage.setItem("mes", mes);
    calendario();
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

    let contador = mes;
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            let posicion = document.getElementById(i+"."+j);

            if (fecha.getMonth()+1==contador) {
                if (fecha.getDay()==j) {
                    posicion.value = fecha.getDate();
                    posicion.innerHTML = fecha.getDate();
                    fecha.setDate(fecha.getDate()+1);
                }else {
                    posicion.value = null;
                    posicion.innerHTML = null;
                }
            }else {
                posicion.value = null;
                posicion.innerHTML = null;
            }
        }
    }

    localStorage.setItem("mes", mes);

    if (localStorage.getItem("isla")==7) {
        escribeTodos();
        pintaTodos();
    }else {
        pintaFestivos();
        escribeFestivos();
    }
}


function isla(isla){

    switch (isla) {
        case "laPalma":
            localStorage.setItem("isla",0);
            break;
        case "elHierro":
            localStorage.setItem("isla",1);
            break;  
        case "laGomera":
            localStorage.setItem("isla",2);
            break; 
        case "tenerife":
            localStorage.setItem("isla",3);
            break;
        case "granCanaria":
            localStorage.setItem("isla",4);
            break;
        case "lanzarote":
            localStorage.setItem("isla",5);
            break;
        case "fuerteventura":
            localStorage.setItem("isla",6);
            break;
        case "todos":
            localStorage.setItem("isla", 7);
            break;
    }

    calendario();
}

isla("todos");
calendario();
