let pelisModal = document.getElementById("modalSection")
//Función del boton ver, que hará la búsqueda por"Title" para poder arojar más datos de la peli buscada.
let verMas = (peliID) => {
  console.log(peliID);
  fetch("https://www.omdbapi.com/?i=" + `${peliID}` + "&apikey=dc09d5bb")
  .then((response)=> {
    console.log(response)
       response.json()
       .then((data) => renderingPeliModal(data))
       .catch((error) => console.log(error))
  })  
}

//Render de la pelicula al dar click en Ver con "toda la info"
let renderingPeliModal= (verPeli) => {
  console.log(verPeli)
  pelisModal.innerHTML +=
  ` <div class="modal fade" id="${verPeli.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel"> ${verPeli.Title}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="card-body">
      <h5 class="card-title">Año: </h5>
      <p class="card-text"> ${verPeli.Year}</p>
      <h5 class="card-title">Tipo: </h5>
      <p class="card-text"> ${verPeli.Type}</p>
      <h5 class="card-title">Idioma: </h5>
      <p class="card-text"> ${verPeli.Language}</p>
      <h5 class="card-title">Duración: </h5>
      <p class="card-text"> ${verPeli.Runtime}</p>
      <h5 class="card-title">Género: </h5>
      <p class="card-text"> ${verPeli.Genre}</p>
      <h5 class="card-title">Reparto: </h5>
      <p class="card-text"> ${verPeli.Actors}</p>
      <h5 class="card-title">Director: </h5>
      <p class="card-text"> ${verPeli.Director}</p>
      <h5 class="card-title">Premios: </h5>
      <p class="card-text"> ${verPeli.Awards}</p>  
      <h5 class="card-title">Puntuación: </h5>
      <p class="card-text"> ${verPeli.imdbRating}</p>  
      <h5 class="card-title">Votos: </h5>
      <p class="card-text"> ${verPeli.imdbVotes}</p>  
    </div>
    </div>
    </div>
  </div>
</div>  `
}

//Reander de la película buscada con imagen, título, año y tipo
let renderingPelis = (pelisData) => {
  console.log(pelisData.Search)
  let pelis = document.getElementById("pelis")

  pelis.innerHTML = "" 
  pelisModal.innerHTML = ""
 for (const peli of pelisData.Search) {
   console.log(peli)
    let pelis = document.getElementById("pelis")
    pelis.innerHTML += '<div class="card" style="width: 22rem;">'   
      + '<img src=' + `${peli.Poster}` + ' class="pelis-card img-fluid rounded mx-auto" alt=' + `${peli.Tile}` + '/>'
      + '<div class="card-body">'
      + '<h1 class="card-title">' + `${peli.Title}` + '</h1>'
      + '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#' + `${peli.imdbID}`+ '> Ver más </button>'
      + '</div>'
      + '</div>' 
      //print modal inside for
      verMas(peli.imdbID)
      //'<button id="btn-verMas" class="btn btn-primary">Ver más</button>'     
 }
}

export let getPelisAPI = (pelisParaBuscar) => {
 fetch("https://www.omdbapi.com/?s=" + `${pelisParaBuscar}` + "&apikey=dc09d5bb")
  .then((response)=> {
    console.log(response)
    if(response.status == 404) {
    alert("Esa peli no existe")
    }else{
       response.json()
       .then((data) => renderingPelis (data))
       .catch((error) => console.log(error))
   }
  })  
 .finally(()=> console.log("promesas resueltas"));
}

//rendering movie selection modals
let renderingSelectionModal= (verPeli) => {
  console.log(verPeli)
  let modalsFilosophy = document.getElementById("pelis-filosofía")
  modalsFilosophy.innerHTML +=
  ` <div class="modal fade" id="${verPeli.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel"> ${verPeli.Title}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="card-body">
      <h5 class="card-title">Año: </h5>
      <p class="card-text"> ${verPeli.Year}</p>
      <h5 class="card-title">Tipo: </h5>
      <p class="card-text"> ${verPeli.Type}</p>
      <h5 class="card-title">Idioma: </h5>
      <p class="card-text"> ${verPeli.Language}</p>
      <h5 class="card-title">Duración: </h5>
      <p class="card-text"> ${verPeli.Runtime}</p>
    <h5 class="card-title">Género: </h5>
    <p class="card-text"> ${verPeli.Genre}</p>
    <h5 class="card-title">Reparto: </h5>
      <p class="card-text"> ${verPeli.Actors}</p>
      <h5 class="card-title">Director: </h5>
      <p class="card-text"> ${verPeli.Director}</p>
      <h5 class="card-title">Premios: </h5>
      <p class="card-text"> ${verPeli.Awards}</p>  
      <h5 class="card-title">Puntuación: </h5>
      <p class="card-text"> ${verPeli.imdbRating}</p>  
      <h5 class="card-title">Votos: </h5>
      <p class="card-text"> ${verPeli.imdbVotes}</p>  
    </div>
    </div>
    </div>
  </div>
</div>  `
}

//Arreglo pelis recomendadas "Sección de Filosofía"
let peliSelection = ["i origins", "blueberry", "branded", "the matrix", "donnie darko", "pink floyd", "fight club", "A Clockwork Orange", "The Warriors", "American History X: Deleted Scenes"]
for (const item of peliSelection) {
  fetch("https://www.omdbapi.com/?t=" + item + "&apikey=dc09d5bb")
  .then((response) => response.json())
  .then((data) => renderingPeliSelection(data))
  .catch((error) => console.log(error))
}

//Rendering pelis filosofía
let renderingPeliSelection = (data) => {
    let peliSelectionSection = document.getElementById("pelis-filosofía")
    peliSelectionSection.innerHTML += '<div class="card" style="width: 22rem;">'   
    + '<img src=' + `${data.Poster}` + ' class="pelis-card img-fluid rounded mx-auto" alt=' + `${data.Tile}` + '/>'
    + '<div class="card-body">'
    + '<h1 class="card-title">' + `${data.Title}` + '</h1>'
    + '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#' + `${data.imdbID}`+ '> Ver más </button>'
    + '</div>'
    + '</div>' 
    //print modal inside for
    renderingSelectionModal(data)
}

//Arreglo pelis recomendadas "Sección de Surrealista"
let peliSelection2 = ["humano","blueberry","branded", "granicero", "donnie darko", "pink floyd", "fight club", "el topo", "La planéte sauvage", "chihiro"]
for (const item of peliSelection2) {
  fetch("https://www.omdbapi.com/?t=" + item + "&apikey=dc09d5bb")
  .then((response) => response.json())
  .then((data) => renderingPeliSelection2(data))
  .catch((error) => console.log(error))
}

//Rendering pelis Surrealista
let renderingPeliSelection2 = (data) => {
    let peliSelectionSection = document.getElementById("pelis-filosofía")
    peliSelectionSection.innerHTML += '<div class="card" style="width: 22rem;">'   
    + '<img src=' + `${data.Poster}` + ' class="pelis-card img-fluid rounded mx-auto" alt=' + `${data.Tile}` + '/>'
    + '<div class="card-body">'
    + '<h1 class="card-title">' + `${data.Title}` + '</h1>'
    + '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#' + `${data.imdbID}`+ '> Ver más </button>'
    + '</div>'
    + '</div>' 
    //print modal inside for
    renderingSelectionModal(data)
}

//Arreglo pelis recomendadas "Sección de Surrealista"
let peliSelection3 = ["humano","blueberry","branded", "granicero", "donnie darko", "pink floyd", "fight club", "el topo", "La planéte sauvage", "chihiro"]
for (const item of peliSelection3) {
  fetch("https://www.omdbapi.com/?t=" + item + "&apikey=dc09d5bb")
  .then((response) => response.json())
  .then((data) => renderingPeliSelection3(data))
  .catch((error) => console.log(error))
}

//Rendering pelis Surrealista
let renderingPeliSelection3 = (data) => {
    let peliSelectionSection3 = document.getElementById("pelis-filosofía")
    peliSelectionSection3.innerHTML += '<div class="card" style="width: 22rem;">'   
    + '<img src=' + `${data.Poster}` + ' class="pelis-card img-fluid rounded mx-auto" alt=' + `${data.Tile}` + '/>'
    + '<div class="card-body">'
    + '<h1 class="card-title">' + `${data.Title}` + '</h1>'
    + '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#' + `${data.imdbID}`+ '> Ver más </button>'
    + '</div>'
    + '</div>' 
    //print modal inside for
    renderingSelectionModal(data)
}
