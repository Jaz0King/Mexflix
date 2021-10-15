
// aquí va todo lo del DOM
import { getPelisAPI} from './data.js';
import { getPelisAPIYear} from './data.js';

//traer input valor de searchInput
let searchPelis = () => {
    let searchValue = document.getElementById("searchInput").value
    getPelisAPI(searchValue) // el valor del input 
}

let searchPelisYear = () => {
    let searchValue = document.getElementById("searchYear").value
    getPelisAPIYear(searchValue) // el valor del input 
}


// funcionalidad para el evento del boton

let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchPelis)

let buttonSearch2 = document.getElementById("searchButton2")
buttonSearch2.addEventListener("click", searchPelisYear)



