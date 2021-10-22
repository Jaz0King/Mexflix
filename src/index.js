
// aquí va todo lo del DOM
import { getPelisAPI} from './data.js';
//import { getVerPeli} from './data.js';

//traer input valor de searchInput
let searchPelis = () => {
    let searchValue = document.getElementById("searchInput").value
    getPelisAPI(searchValue) 
    let pelisCard = document.getElementById("pelis")// oculta, se pinta al dar click
    pelisCard.hidden = false;
    // el valor del input 
}
/*
let verPeli = () => {
    let searchValue = document.getElementById("searchInput").value
    getVerPeli(searchValue)
    let pelisCard = document.getElementById("searchInput")// oculta, se pinta al dar click
    pelisCard.hidden = false; // el valor del input 
}
*/

// funcionalidad para el evento del boton

let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchPelis)

//let buttonVer = document.getElementById("verButton")
//buttonVer.addEventListener("click", verPeli)
  





