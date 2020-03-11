// import { data } from './data/rickandmorty / rickandmorty.js';

// console.log(data);

// Se escribirán elementos del DOM
// Crear nodos

// document.querySelector()

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
      return characters.map((character) => {
        const li = appendChild('li'),
          img = appendChild('img'),
          span = appendChild('span');
        img.src = character.image;
        span.innerHTML = `${character.name}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

document.querySelector('#cosa').addEventListener('click', traer);
