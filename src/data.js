// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo

// export const data = () => {
//  return 'data';
// };
function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.append(el);
}

const ul = document.querySelector('#characters');
const input = document.querySelector('#buscar');
const api = 'https://rickandmortyapi.com/api/character/?name=';

function traer() {
  fetch(api + input.value)
    .then((resp) => resp.json()) // transforma la data en objeto json
    .then((data) => { // aquí escribimos lo que queremos hacer con esa data
      const characters = data.results; // esto toma los personajes de la data
      ul.innerHTML = ''; // esto limpia el html antes de ejecutar la función
      return characters.map((character) => { // hace un map de los resultados y ejecuta el código
        let li = createNode('li'), // estos son los elementos necesarios
          img = createNode('img'),
         div = createNode('div');
        img.src = character.image; // aquí hace la búsqueda de la imagen, con la fuente específica de la data
        characters.innerHTML = `${character.name}`; // hace que se muestre la el nombre en el html
        append(li, img); // estos son los elementos a adjuntar, falta mostrar el nombre en bloque
        append(li, div);
        append(ul, li);
      });
    });
}
document.querySelector('#cosa').addEventListener('click', traer);


// Manipulación a través de arreglos y objetos

// Función filtrado
// filterData()
// Función ordenar
// sortData()
