// import { data } from './data/rickandmorty / rickandmorty.js';

// console.log(data);

// Se escribirán elementos del DOM
// Crear nodos

// document.querySelector()


const api = 'https://rickandmortyapi.com/api/';

function traer() {
  fetch(api)
  .then (response => {
      console.log(response.json())
    });
}

document.querySelector('#cosa').addEventListener('click', traer)