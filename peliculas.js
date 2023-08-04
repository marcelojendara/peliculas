
const peliculas = [
    { id: 1, titulo: 'Back to the Future', genero: "scifi",video:"https://www.youtube.com/watch?v=T_WSXXPQYeY&ab_channel=UniversalPictures" },
    { id: 2, titulo: 'Top Gun', genero: "accion",video:"https://www.youtube.com/watch?v=kUsFWO08CO0&ab_channel=PauloC%C3%A9sar" },
    { id: 3, titulo: 'Star Wars', genero: "scifi", video: "https://www.youtube.com/watch?v=8Qn_spdM5Zg&ab_channel=StarWars" },
    { id: 4, titulo: 'Revenge of the Nerds', genero: "comedia", video:"https://www.youtube.com/watch?v=Jfyfj9Gdfdk&ab_channel=JoohnMovieClips" },
    { id: 5, titulo: 'Police Academy', genero: "comedia", video:"https://www.youtube.com/watch?v=6OKt2CZ4ULE&ab_channel=Movieclips" },
    { id: 6, titulo: 'Avatar', genero: "scifi", video: "https://www.youtube.com/watch?v=6OKt2CZ4ULE&ab_channel=Movieclips" }
  ];
  
  export function getPeliculaimagen()
  {
    const randomNumberInRange = (min, max) =>
     Math.floor(Math.random() * (max - min)) + min;
     const random = randomNumberInRange(0,6);
     const url="https://www.omdbapi.com/?apikey=5ab2d3&t="+peliculas[random].titulo
    fetch(url)
      .then(response => response.json())
      .then(data => {
        debugger
        return(data.Poster)
      });
 }
 