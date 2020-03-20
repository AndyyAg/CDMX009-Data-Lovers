function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.append(el);
}

const contenido = document.querySelector('#characters');
const input = document.querySelector('#buscar');
const api = 'https://rickandmortyapi.com/api/character/?name=';

function traer() {
  fetch(api + input.value)
    .then((resp) => resp.json()) // transforma la data en objeto json
    .then((data) => { // aquí escribimos lo que queremos hacer con esa data
      const characters = data.results;
      // Se limpia el contenido antes de ejecutar la función
      contenido.innerHTML = '';
      return characters.map((character) => {
        // Creamos nodos para mostrar los elementos
        const li = createNode('li');
        const img = createNode('img');
        const div = createNode('div');
        const charId = createNode('div');
        const location = createNode('div');
        // Buscamos la data necesaria
        img.src = character.image;
        div.innerHTML = `${character.name}`;
        charId.innerHTML = `${character.id}`;
        location.innerHTML = `${character.location.name}`;
        // La adjuntamos para que quede en el mismo sitio
        append(li, img);
        append(li, div);
        append(li, charId);
        append(li, location);
        append(contenido, li);

        console.log(data);
      });
    });
}

document.querySelector('#cosa').addEventListener('click', traer);
