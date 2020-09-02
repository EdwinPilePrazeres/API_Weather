/**
 * Variables Globales
 */
let options= "";
let options_m = "";
let x = "";
let informacion ;
let ciudadesList = document.querySelector("#ciudades");
let provinciasList = document.querySelector("#provincias");
let nombre_provincia;


//Ciudades de las provincias

    
var provincias = ['--Provincias--','Bocas del Toro', 'Coclé', 'Colón', 'Chiriquí','Darién','Herrera', 'Los Santos', 'Panamá','Veraguas',];

var Bocas_del_toro = ['---','Changuinola','Almirante','Chiriquí Grande','Tierra Oscura','Las Tablas','Guabito','Valle del Risco','Punta Robalo'];

var Cocle = ['---','Rio Hato','Aguadulce','La Pintada','Nata','Penonome','Anton','Pocri','El Cristo','La Loma'];

var Colon = ['---','Portobelo','Cativa','Sabanitas','Cristoba','Santa Rita Arriba'];

var Chiriqui = ['---','David','Boquete','Cerro Punta','Dolega','Gualaca','Tole','Bugaba','Divala','Puerto Armuelles'];

var Darien = ['---','Pinogana','Garachine','Chiman','Meteti'];

var Los_Santos = ['---','Las Tablas','Macaracas','Pocri','Guarare','La Espigadilla','Agua Buena'];

var Panama = ['---','San Miguelito','Caimitillo','Tocumen','Pacora','Chepo'];

var Veraguas = ['---','Santiago','Rio de Jesus','La Raya'];

var Panama_Oeste = ['---','La Chorrera','Arraijan','Capira','Chame','Bejuco']



 /**
  * Select  Variables
  */

//Select de Provincias
 for (let i=0; i<provincias.length; i++) {
     
    options += `<option value="${provincias[i]}">${provincias[i]}</option>`
}

document.querySelector("#provincias").innerHTML = options;


provinciasList.addEventListener("change", newProvinciaSelection);



function newProvinciaSelection(event) {
    
    displayProvinciaInfo(event.target.value);
    nombre_provincia  = event.target.value;
};

function displayProvinciaInfo (data) {
    const provinciaName = data;
    let options_m = "";

    if (provinciaName == 'Bocas del Toro') {

        for (let i=0; i<Bocas_del_toro.length; i++) {
            options_m += `<option value="${Bocas_del_toro[i]}">${Bocas_del_toro[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://www.ecured.cu/images/4/46/Bandera_de_Bocas_del_Toro.jpg`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;


    }  else if (provinciaName == "Coclé") {

        for (let i=0; i<Cocle.length; i++) {
            x = Cocle[i];
            options_m += `<option value="${Cocle[i]}">${Cocle[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandera_de_la_Provincia_de_Cocl%C3%A9.svg/1200px-Bandera_de_la_Provincia_de_Cocl%C3%A9.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;

    } else if (provinciaName == "Colón") {
        for (let i=0; i<Colon.length; i++) {
            x = Colon[i];
            options_m += `<option value="${Colon[i]}">${Colon[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bandera_de_la_Provincia_de_Col%C3%B3n-Panam%C3%A1.svg/1200px-Bandera_de_la_Provincia_de_Col%C3%B3n-Panam%C3%A1.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Chiriquí") {
        for (let i=0; i<Chiriqui.length; i++) {
            x = Chiriqui[i];
            options_m += `<option value="${Chiriqui[i]}">${Chiriqui[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bandera_de_la_Provincia_de_Chiriqu%C3%AD.svg/1200px-Bandera_de_la_Provincia_de_Chiriqu%C3%AD.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;

        

    } else if (provinciaName == "Darién") {
        for (let i=0; i<Darien.length; i++) {
            x = Darien[i];
            options_m += `<option value="${Darien[i]}">${Darien[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bandera_de_la_Provincia_de_Dari%C3%A9n.svg/1280px-Bandera_de_la_Provincia_de_Dari%C3%A9n.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Herrera") {
        for (let i=0; i<Los_Santos.length; i++) {
            x = Los_Santos[i];
            options_m += `<option value="${Los_Santos[i]}">${Los_Santos[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://m.panamaamerica.com.pa/sites/default/files/filenLKkI2`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Los Santos") {
        for (let i=0; i<Bocas_del_toro.length; i++) {
            x = Bocas_del_toro[i];
            options_m += `<option value="${Bocas_del_toro[i]}">${Bocas_del_toro[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bandera_de_la_Provincia_de_Los_Santos.svg/1200px-Bandera_de_la_Provincia_de_Los_Santos.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Panamá") {
        for (let i=0; i<Panama.length; i++) {
            x = Panama[i];
            options_m += `<option value="${Panama[i]}">${Panama[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bandera_de_Ciudad_de_Panam%C3%A1.svg/1280px-Bandera_de_Ciudad_de_Panam%C3%A1.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Veraguas") {
        for (let i=0; i<Veraguas.length; i++) {
            x = Veraguas[i];
            options_m += `<option value="${Veraguas[i]}">${Veraguas[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://www.diaadia.com.pa/sites/default/files/filefield_paths/bandera_medida.jpg`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;



    } else if (provinciaName == "Panamá Oeste") {
        for (let i=0; i<Panama_Oeste.length; i++) {
            x = Panama_Oeste[i];
            options_m += `<option value="${Panama_Oeste[i]}">${Panama_Oeste[i]}</option>`
        }
        document.querySelector("#ciudades").innerHTML = options_m;
        document.querySelector(".left_block img").src = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bandera_de_la_Provincia_de_Panam%C3%A1_Oeste.svg/1200px-Bandera_de_la_Provincia_de_Panam%C3%A1_Oeste.svg.png`;
        document.querySelector(".left_block img").alt = `Bandera de ${x}`;

    } else {

    }
        
}


/**
 * Obtener informacion con Fetch
 */
ciudadesList.addEventListener("change", newNameSelection);

function newNameSelection (event) {

    x = event.target.value;
    search(x);
  
    

};

function search(x) {
    console.log(x);
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${x}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "a9f73738a0msh0a5f232cbbb8b08p1e7776jsnbb6dddad0130"
        }
    })
    .then(response => {
   
        return response.json();
    })
    .then(function(data){
   
        initialize(data);
    })
    .catch(err => {
        console.log(err);
    });

}




function initialize(weatherData) {
       
    document.querySelector(".nombre").innerHTML = `${weatherData.city.name}, ${nombre_provincia}`;
    document.querySelector("#top").innerHTML = `${weatherData.list[0].weather[0].description}`;
 
    document.querySelector("#clima_actual").innerHTML = `${parseInt(weatherData.list[0].main.temp - 273.15)} &#8451`;

    for (let i=0; i<24; i++) {
        var fecha = (weatherData.list[i].dt_txt).split(" ");
            document.querySelector(`#dia_${i}`).innerHTML = fecha[0];
            document.querySelector(`#hora_${i}`).innerHTML = fecha[1];
            document.querySelector(`#clima_${i}`).innerHTML = `T : ${parseInt(weatherData.list[i].main.feels_like - 273.15)} &#8451`;
            document.querySelector(`#hum_${i}`).innerHTML = `Hum : ${parseInt(weatherData.list[i].main.humidity)}`;
 
        
    }
 
}

