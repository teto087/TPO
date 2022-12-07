
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.545&lon=-58.448&appid=ac9c3ec1c0e7bdbe10e6462fe3f0a661&units=metric&lang=es"

async function obtenerDatos(){
    const response = await fetch(api_url)
    const data = await response.json()

    document.getElementById("ciudad").innerHTML="<h5>Clima en " + data.name +  " </h5>"


    let img = document.createElement('img')
    const imagenclima = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    imagen.setAttribute("src" , imagenclima)

    document.getElementById("temperatura").innerHTML="<h5>Temperatura " + data.main.temp +  "°C</h5>"
    document.getElementById("sensacion-termica").innerHTML="<h5>Térmica " + data.main.feels_like +  "°C</h5>"
}

obtenerDatos()