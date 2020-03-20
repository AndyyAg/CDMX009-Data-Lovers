function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.append(el);
}

const contenido = document.querySelector('#characters');
const input = document.querySelector('#buscar');
const searchInput = '/?name=';
const api = 'https://rickandmortyapi.com/api/character/';

function traer() {
  fetch(api + searchInput + input.value)
    .then((resp) => resp.json()) // transforma la data en objeto json
    .then((data) => { // aquí escribimos lo que queremos hacer con esa data
      const characters = data.results; // esto toma los personajes de la data
      contenido.innerHTML = ''; // esto limpia el html antes de ejecutar la función
      return characters.map((character) => { // hace un map de los resultados y ejecuta el código
        const li = createNode('li'), // estos son los elementos necesarios
          img = createNode('img');
        div = createNode('div');
        charId = createNode('id');
        img.src = character.image; // aquí busca la imagen, con la fuente específica de la data
        div.innerHTML = `${character.name}`;
        charId.innerHTML = `${character.id}`;// hace que se muestre la el nombre en el html
        append(li, img); // estos son los elementos a adjuntar
        append(li, div);
        append(li, charId);
        append(contenido, li);

        console.log(data);
      });
    });
};

document.querySelector('#cosa').addEventListener('click', traer);
