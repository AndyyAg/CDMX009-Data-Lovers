// Permite la creación de elementos para integrarlos a HTML
function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.append(el);
}

const contenido = document.querySelector('#characters');
const input = document.querySelector('#buscar');

const api = 'https://rickandmortyapi.com/api/character/';
const searchName = '?name=';

function createCard(character) {
  // Creamos nodos para mostrar los elementos
  const li = createNode('li');
  const img = createNode('img');
  const div = createNode('div');
  const charId = createNode('div');
  const location = createNode('div');
  // Buscamos la data necesaria
  charId.innerHTML = `${character.id}`;
  img.src = character.image;
  div.innerHTML = `${character.name}`;
  location.innerHTML = `${character.location.name}`;
  // La adjuntamos para que quede en el mismo sitio
  append(li, charId);
  append(li, img);
  append(li, div);
  append(li, location);
  append(contenido, li);
  return li;
}

function traer() {
  fetch(api + searchName + input.value)
    .then((resp) => resp.json()) // transforma la data en objeto json
    .then((data) => { // aquí escribimos lo que queremos hacer con esa data
      const characters = data.results;
      // Se limpia el contenido antes de ejecutar la función
      contenido.innerHTML = '';
      return characters.map((character) => {
        const li = createCard(character);
        console.log(data);
      });
    });
}

document.querySelector('#cosa').addEventListener('click', traer);
