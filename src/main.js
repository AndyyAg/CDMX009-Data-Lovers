// import { data } from './data/rickandmorty / rickandmorty.js';

// console.log(data);

// Se escribirán elementos del DOM
// Crear nodos

// document.querySelector()

const api = 'https://rickandmortyapi.com/api/';
fetch(api)
  .then((response) => { return response.json(); })
  .then((data) => {
    console.log(data);
  });