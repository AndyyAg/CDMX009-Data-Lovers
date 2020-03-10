// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo

//export const data = () => {
//  return 'data';
//};

var api = 'https://rickandmortyapi.com/api/';
fetch (api)
 .then((response) => {
   return response.json();
 })
   .then((data) => {
     console.log(data);
   });

document.querySelector('#cosadata').addEventListener('click', fetch);

//Manipulación a través de arreglos y objetos

//Función filtrado
filterData()
//Función ordenar
sortData()
