
/**
 * Guarda la información a mostrar en la página
 */
const festivos = [
    {isla:"La Palma", 
        dia:[5, 15, 12, 8], 
        mes:[8, 8, 2, 9],
        celebracion: ["Nuestra Señora de las Nieves", 
            "La Fiesta de la Morena",
            "Día de Los Indianos",
            "Danza del Diablo"],
        descripcion: ["Es un culto que llegó a La Palma tras la conquista de la isla en el siglo XV", 
            "Se remontan al siglo XVI, cuando las mujeres del municipio se reunían para vender o intercambiar el pescado capturado",
            "Se remontan al siglo XIX, cuando se recibía con festejos a los isleños que habían emigrado a Cuba buscando las Américas y volvían presumiendo de las riquezas que habían logrado en su aventura.",
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


/**
 * Permite marcar como favorito un día festivo. Solo disponible para la sección de islas individuales
 * @param {Object<button>} boton De favorito
 */
function marcaFavorito(boton) {

    if (boton.className=="no-favorito") {
        document.getElementById(boton.id).classList.add("favorito");
        localStorage.setItem(boton.id, "favorito");
    }

    if (boton.className=="favorito") {
        document.getElementById(boton.id).classList.add("no-favorito");
        localStorage.setItem(boton.id, "no-favorito");
    }

    escribeFestivos();

}


/**
 * Crea todas las tarjetas de la sección "Todos"
 */
function escribeTodos() {
    let meses = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];
    let isla = 0;

    document.getElementById("contenedor-info").innerHTML = ""; // Elimina las tarjetas anteriores

    // Crea las tarjetas una por una
    for (let a = 0; a < festivos.length; a++) {
        isla = festivos[a];
        for (let i = 0; i < isla.dia.length; i++) {
            let str = "<div class='infoIslas' id='diasFestivos'><div class='fecha'><h2>"+meses[isla.mes[i]-1]+"</h2><p>"+isla.dia[i]+"</p></div><div class='islaCelebracion'><div class='titulos'><h1>"+isla.isla+"<p>"+isla.celebracion[i]+"</p></h1></div><p>"+isla.descripcion[i]+"<br>"+isla.costumbres[i]+"</p></div></div>";
            document.getElementById("contenedor-info").innerHTML += str;
            document.getElementById("diasFestivos").id = localStorage.getItem("isla")+""+isla.dia[i];
        }
    }
}


/**
 * Pinta los días de todas las islas en la sección "Todos"
 */
function pintaTodos() {
    let mes = localStorage.getItem("mes");
    let dias = document.getElementsByClassName("dia");
    let islasDias = [];

    // Guarda todos los días que tiene que pintar
    for (let i = 0; i < festivos.length; i++) {
        for (let j = 0; j < festivos[i].dia.length; j++) {
            if (festivos[i].mes[j]==mes) {
                islasDias.push(festivos[i].dia[j]);
            }     
        }  
    }

    // Los ordena de forma ascendente para imprimir en ese mismo orden. Si no se ordena puede que se salte días
    islasDias.sort((a,b)=>a-b); 

    for (let j = 0; j < dias.length; j++) {
        let posicion = document.getElementById(dias[j].id);

        if (dias[j].value!=null && dias[j].value == islasDias[0]) {
            posicion.innerHTML = "<a href='#"+localStorage.getItem("isla")+''+islasDias[0]+"'>"+posicion.value+"</a>"
            posicion.classList.add("festivo")
            islasDias.shift();
        }else {
            posicion.classList.remove("festivo")
        }
    }
}


/**
 * Crea las tarjetas informativas de cada día festivo
 */
function escribeFestivos(){
    let isla = festivos[localStorage.getItem("isla")];
    let botonFav = "<button id='favorito' onclick=marcaFavorito(this)></button>"; // Solo disponible en secciones de islas individuales
    let numIsla = localStorage.getItem("isla");
    let meses = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

    document.getElementById("contenedor-info").innerHTML = ""; // Borra todas las tarjetas anteriores

    // Crea todas las tarjetas correspondientes a una isla
    for (let i = 0; i < isla.dia.length; i++) {
        let str = "<div class='infoIslas' id='diasFestivos'><div class='fecha'><h2>"+meses[isla.mes[i]-1]+"</h2><p>"+isla.dia[i]+"</p></div><div class='islaCelebracion'><div class='titulos'><h1>"+isla.isla+"<p>"+isla.celebracion[i]+"</p></h1>"+botonFav+"</div><p>"+isla.descripcion[i]+"<br>"+isla.costumbres[i]+"</p></div></div>";
        document.getElementById("contenedor-info").innerHTML += str;
        document.getElementById("favorito").id = numIsla +"favorito"+ i;
        document.getElementById("diasFestivos").id = numIsla+""+isla.dia[i];

        // Verifica si ya era favorito y lo pinta
        if (localStorage.getItem(numIsla+"favorito"+i)=="favorito") {
            document.getElementById(numIsla+"favorito"+i).classList.add("favorito");
        }else {
            document.getElementById(numIsla+"favorito"+i).classList.add("no-favorito");
        }
    }
}


/**
 * Permite pintar la celda correspondiente a un día festivo. Pinta una o más según sea necesario
 */
function pintaFestivos() {
    let mes = localStorage.getItem("mes");
    let isla = festivos[localStorage.getItem("isla")];
    let dias = document.getElementsByClassName("dia");
    let islaDias = [];

    // Guarda en un array todos los días que se van a imprimir de un mes e isla específicos
    for (let i = 0; i < isla.dia.length; i++) {
        if (isla.mes[i]==mes) {
            islaDias.push(isla.dia[i]);
        }     
    }

    // Asigna clases de festivo
    for (let j = 0; j < dias.length; j++) {
        let posicion = document.getElementById(dias[j].id);

        if (dias[j].value!=null && dias[j].value == islaDias[0]) { // Si el valor de la celda es igual al día festivo de la isla...
            posicion.innerHTML = "<a href='#"+localStorage.getItem("isla")+''+islaDias[0]+"'>"+posicion.value+"</a>";
            posicion.classList.add("festivo");
            islaDias.shift();
        }else {
            posicion.classList.remove("festivo"); // En caso de que la celda traiga esa clase del mes anterior
        }
    }
}

/**
 * Permite avanzar el calendario con respecto a los meses. Al llegar a Ene. se reinicia y pinta Dic.
 */
function avanzar(){
    let mes = localStorage.getItem("mes");
    mes++;
    if (mes>12) {
        mes = 1;
    }
    localStorage.setItem("mes", mes);
    calendario();
}


/**
 * Permite avanzar el calendario con respecto a los meses. Al llegar a Dic. se reinicia y comienza en Ene.
 */
function retroceder(){
    let mes = localStorage.getItem("mes");
    mes--;
    if (mes<1) {
        mes = 12;
    }
    localStorage.setItem("mes", mes);
    calendario();
}


/**
 * Dibuja el calendario en el HTML y le asigna valores a cada celda de la tabla
 */
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

    // Si se pulso "Todos", la isla será 7 representando a todas las islas
    if (localStorage.getItem("isla")==7) {
        escribeTodos();
        pintaTodos();
    }else {
        pintaFestivos();
        escribeFestivos();
    }
}


/**
 * Operaciones que realiza esta función:
 * 1. Guarda en el LocalStorage el nombre y número de la isla con la que se ejecutará el programa
 * 2. Imprime el nombre de la isla en el HTML "Sección actual"
 * 3. Ejecuta la función calendario
 * @param {String} isla Se recibe a través del "onclicK" del html
 */
function isla(isla){

    switch (isla) {
        case "laPalma":
            document.getElementById("seccion").innerHTML = "La Palma";
            localStorage.setItem("isla",0);
            break;
        case "elHierro":
            document.getElementById("seccion").innerHTML = "El Hierro";
            localStorage.setItem("isla",1);
            break;  
        case "laGomera":
            document.getElementById("seccion").innerHTML = "La Gomera";
            localStorage.setItem("isla",2);
            break; 
        case "tenerife":
            document.getElementById("seccion").innerHTML = "Tenerife";
            localStorage.setItem("isla",3);
            break;
        case "granCanaria":
            document.getElementById("seccion").innerHTML = "Gran Canaria";
            localStorage.setItem("isla",4);
            break;
        case "lanzarote":
            document.getElementById("seccion").innerHTML = "Lanzarote";
            localStorage.setItem("isla",5);
            break;
        case "fuerteventura":
            document.getElementById("seccion").innerHTML = "Fuerteventura";
            localStorage.setItem("isla",6);
            break;
        case "todos":
            document.getElementById("seccion").innerHTML = "Todos";
            localStorage.setItem("isla", 7);
            break;
    }

    calendario();
}

isla("todos"); // Siempre carga "Todos" al cargar la página
