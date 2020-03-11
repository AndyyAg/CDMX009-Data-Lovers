# Data Rick

## Índice

* [1.Objetivo del proyecto](#1-Objetivo-del-proyecto)
* [2.Proceso de diseño/problemática y solución](#2-Proceso-de-diseño-problematica-y-solucion)
* [3.Investigación UX](#3-Investigacion-UX)
* [Historias de usuario](#Historias-de-usuario)
* [4.Prototipo de baja fidelidad](#4-Prototipo-de-baja-fidelidad)
* [5.Prototipo de alta fidelidad](#5-Prototipo-de-alta-fidelidad)
* [6.Testeos de usabilidad](#6-Testeos-de-usabilidad)
* [7.Feedback](#7-Feedback)
* [8.Prototipo final](#8-Prototipo-final)
* [9.Pruebas unitarias](#9-Pruebas-unitarias)
* [10.Objetivos de aprendizaje](#10-Objetivos-de-aprendizaje)

***

## 1. Objetivo del proyecto

Proporcionar información a los usuarios sobre los personajes que han aparecido a lo largo de la serie, se busca brindar información individual y datos generales de cada uno de estos; con la finalidad de apoyar a los creadores de contenido al desarrollo de videos, posts, etc.

## 2. Proceso de diseño/problemática y solución

**Proceso de diseño**  
Iniciamos con el desarrollo de ideas y planteándonos la problemática, leímos referente a SCRUM para poder utilizar este marco de trabajo, igual investigamos referente al diseño de las historias de usuario. Comenzamos con la tabla SCRUM en la plataforma de Trello con dos historias de usuario y realizamos bocetos a mano, dimos inicio al wireframe y solicitamos feedback a potenciales usuarios.
Se solicitó feedback a dos compañeras.
Al haber terminado los prototipos y el muckup dimos inicio al codeo, realizamos maquetación concentrándonos en el responsive, usando flexbox, modal box, section entre otras alternativas.
Se dio inicio a codeo con JS a partir del sprint 2, donde nos enfocamos principalmente en mostrar la data y cubrir las historias de usuario con sus respectivos criterios de aceptación.

**Resolución de problemas**
El usuario podrá visualizar en su totalidad a los personajes que aparecieron en las cuatro temporadas de Rick and Morty, filtrará los datos, los ordenará y podrá tomar información para su uso en videos referentes a la serie, adquirir mayor conocimiento respecto al tema o por ocio.

## 3. Investigación UX

**¿Quiénes son los principales usuarios de producto?**
Mujeres y hombres jóvenes de 18 a 29 años de edad. El programa va enfocado a mayores de edad o generación millennial.
Información adquirida de: (https://www.imdb.com/title/tt2861424/ratings)

**¿Cuáles son los objetivos de estos usuarios en relación con el producto?**
Desde la búsqueda de información referente a todos los personajes que han aparecido a lo largo de la serie, para la creación de más contenido multimedia acorde a la temática del programa; desde el desarrollo de videos con teorías, datos estadísticos, spoilers o curiosidades de personajes, episodios o la linea del tiempo de la serie.

**¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**
Imágenes de los personajes, filtros para los datos, la información básica de los personajes.

**¿Cuándo utilizan o utilizarían el producto?**
Al momento de desarrollar más contenido del programa, antes del inicio de alguna temporada.

### Historias de usuario

1. El usuario visualizará la información con una imagen para diferenciar a los personajes. _Terminado al dia 10 de marzo 2020._
2. El usuario filtrará la data bajo sus propios parámetros para facilitar su búsqueda.

### Criterios de aceptación
1. En ambas historias, el usuario debe cumplir con mayoria de edad para acceder a la página, este dato se confirmará por medio de un prompt() para poder corroborar su edad.

## 4.Prototipo de baja fidelidad

<img src="https://github.com/AndyyAg/CDMX009-Data-Lovers/blob/master/images/Boceto%201.jpeg">
<img src="https://github.com/AndyyAg/CDMX009-Data-Lovers/blob/master/images/wireframe.png">

## 5.Prototipo de alta fidelidad

<img src="https://github.com/AndyyAg/CDMX009-Data-Lovers/blob/master/images/muckup.png">

## 6.Testeos de usabilidad

## 7. Feedback

Wireframe: En un futuro poder descargar la información, anexar caja para comentarios, poner colores llamativos. Hacer llamativo el scroll de los personajes (se le hizo pesado imaginar que ahí estaban todos así nomás), colores neón, brillantes, un mensaje chistoso si no cumple la edad para entrar. El espacio donde irá un video puede quedar en segundo plano de prioridad, interfaz debe ser más dinámica, verificar como se va a ordenar o filtrar.
Adriana nos apoyó con el arreglo de la maqueta para que los datos no se ocultaran.

## 8. Prototipo final

## 9. Pruebas unitarias

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).


## 10. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

### UX

- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener _feedback_ e iterar.
- [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [X] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [X] Entender y reconocer por qué es importante el HTML semántico.
- [X] Identificar y entender tipos de selectores en CSS.
- [X] Entender como funciona `flexbox` en CSS.
- [X] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [ ] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [ ] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [X] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [X] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [X] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [X] Utilizar linter para seguir buenas prácticas (ESLINT).

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo: toma como referencia 3 semanas.

***

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atomicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

***

_Proyecto elaborado por Mara Mulato y Andrea Aguilar. :)_