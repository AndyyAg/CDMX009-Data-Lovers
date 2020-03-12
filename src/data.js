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
function appendChild(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector('#characters');
const input = document.querySelector('#buscar');
const api = 'https://rickandmortyapi.com/api/character/?name=';

function traer() {
  fetch(api + input.value)
    .then((resp) => resp.json())
    .then((data) => {
      const characters = data.results;
      ul.innerHTML=""
      return characters.map((character) => {
        let li = appendChild('li'),
          img = appendChild('img'),
         div = appendChild('div');
        img.src = character.image;
        characters.innerHTML = `${character.image}`;
        append(li, img);
        append(li, div);
        append(ul, li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
document.querySelector('#cosa').addEventListener('click', traer);


// Manipulación a través de arreglos y objetos

// Función filtrado
// filterData()
// Función ordenar
// sortData()
