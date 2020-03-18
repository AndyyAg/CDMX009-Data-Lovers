function createNode(element) {
  return document.createElement(element);
}
function appendChild(parent, el) {
  return parent.appendChild(el);
}

const contenido = document.querySelector('#characters');
const input = document.querySelector('#buscar');
const searchInput = '/?name='
const api = 'https://rickandmortyapi.com/api/character/';

function traer() {
  fetch(api + searchInput + input.value)
    .then((resp) => resp.json()) // transforma la data en objeto json
    .then((data) => { // aquí escribimos lo que queremos hacer con esa data
      const characters = data.results; // esto toma los personajes de la data
      contenido.innerHTML = ''; // esto limpia el html antes de ejecutar la función
      return characters.map((character) => { // hace un map de los resultados y ejecuta el código
        let li = createNode('li'), // estos son los elementos necesarios
          img = createNode('img'),
          ul = createNode('ul');
        img.src = character.image; // aquí busca la imagen, con la fuente específica de la data
        ul.innerHTML = `${character.name}`; // hace que se muestre la el nombre en el html
        appendChild(li, img); // estos son los elementos a adjuntar, falta mostrar el nombre en bloque
        appendChild(li, ul);
        appendChild(contenido, li);
      });
    });
}

document.querySelector('#cosa').addEventListener('click', traer);
