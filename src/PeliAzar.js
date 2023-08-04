
import { getPelicula } from './peliculas.js';

const peliculas = [
    { id: 1, titulo: 'Back to the Future', genero: "scifi",video:"https://youtu.be/NDS1myoYUzs" },
    { id: 2, titulo: 'Top Gun', genero: "accion",video:"https://youtu.be/qSqVVswa420" },
    { id: 3, titulo: 'Star Wars', genero: "scifi", video: "https://youtu.be/YUA9rPpf2xo" },
    { id: 4, titulo: 'Revenge of the Nerds', genero: "comedia", video:"https://youtu.be/kIZH5TKnEeg" },
    { id: 5, titulo: 'Police Academy', genero: "comedia", video:"https://youtu.be/ic-x0rOQDFA" },
    { id: 6, titulo: 'Avatar', genero: "scifi", video: "https://youtu.be/bDFKIs4v0B4" }
  ];
  var dato="";
  function generarRandom(){
    const randomNumberInRange = (min, max) =>
     Math.floor(Math.random() * (max - min)) + min;
     const random = randomNumberInRange(0,5)
    const url="https://www.omdbapi.com/?apikey=5ab2d3&t="+peliculas[random].titulo
    
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
          //console.log(data)
          dato=data.Poster
          document.getElementById("imagenposter").src=dato
          document.getElementById("video_lnk").href=peliculas[random].video
          document.getElementById("video_ver").src=peliculas[random].video
         
      });
}

function PeliAzar() {
    return (
      <div className="App">
        <header className="App-header">
          <p className='parrafo'>
            <img src="" id="imagenposter" onLoad={generarRandom()} alt="imagen poster"></img>
          </p>  
          <p className='parrafo'>
            <a href="" id="video_lnk" className='App-link' target='_blank'>VER PELI...</a>            
          </p>
          <p className='parrafo'>
          <iframe width="420" height="315"
              src="" id="video_ver">
            </iframe> 
          </p>
          
        </header>
      </div>
    );
  }
  
  export default PeliAzar;