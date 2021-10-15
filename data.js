

let renderingPelis = (pelisData) => {
    let pelisName = document.getElementById("pelis-name")
    let pelisImg = document.getElementById("pelis-img")
    let pelisYear = document.getElementById("pelis-year")
   //let pelisActors = document.getElementById("pelis-actors")
    pelisName.innerHTML = pelisData.Title
    pelisName.innerHTML = pelisData.Year
  //pelisName.innerHTML = pelisData.Actors
    pelisImg.setAttribute("src", pelisData.Poster)
    pelisYear.setAttribute("src", pelisData.Year)
  //pelisActors.setAttribute("src", pelisData.Actors.front_default)
    
}

let renderingAño = (pelisData) => {
    let pelisName = document.getElementById("pelis-name")
    let pelisImg = document.getElementById("pelis-img")
    let pelisYear = document.getElementById("pelis-year")
   //let pelisActors = document.getElementById("pelis-actors")
    pelisName.innerHTML = pelisData.Title
    pelisName.innerHTML = pelisData.Year
  //pelisName.innerHTML = pelisData.Actors
    pelisImg.setAttribute("src", pelisData.Poster)
    pelisYear.setAttribute("src", pelisData.Year)
  //pelisActors.setAttribute("src", pelisData.Actors.front_default)
    
}




//exportar función y valores de la  API
//flujo de proceso interrupmpido con una entrada no reconocida, se agrega el alert para el error 404


export let getPelisAPI = (pelisParaBuscar) => {
fetch("http://www.omdbapi.com/?t= '' + '' " + `${pelisParaBuscar}` + "&apikey=dc09d5bb")
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


export let getPelisAPIYear = (pelisPorAño) => {
    fetch("http://www.omdbapi.com/?y= '' + '' " + `${pelisPorAño}` + "&apikey=dc09d5bb")
     .then((response)=> {
        console.log(response)
        if(response.status == 404) {
        alert("Esa peli no se ha estrenado")
        }else{
           response.json()
           .then((data) => renderingAño (data))
           .catch((error) => console.log(error))
       }
      }) 
    
     
     .finally(()=> console.log("promesas resueltas"));
    
    }


//función para renderear pokemon de