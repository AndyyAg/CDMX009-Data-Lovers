// import { data } from './data/rickandmorty / rickandmorty.js';

// console.log(data);

// Se escribirán elementos del DOM
// Crear nodos

// document.querySelector()

const input = document.querySelector('#buscar');
const api = 'https://rickandmortyapi.com/api/';

function traer() {
  fetch(api + input.value)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

document.querySelector('#cosa').addEventListener('click', traer);
