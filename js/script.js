/* 
Necesitamos:
Imagen: .image
Nombre: .name
Especie: .species


Primero vamos a añadir un personaje a ver si funciona.

Y si guardo todo el fetch en un array para manerjarlo mejor?



*/

// Probamos a iterar sobre fetch:

const lista_personajes = document.getElementById('character-list');


fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Solicitud fallida');
        }
        return response.json();
    })
    .then((data) => {
         lista_personajes.innerHTML = data.results.map(personaje => {
            return `
            <div class= "card">
            <li><img src = ${personaje.image}></li>
            <p><span class="negrita">Name:</span> ${personaje.name}</p>
            <p><span class="negrita">Species:</span> ${personaje.species}</p>
            </div>
            `
         }).join('')
    })
    .catch((error) => {
        console.log('Error: no se pudo obtener la informacion');
    });


// Botones

const boton_next = document.getElementById('next-page');
const boton_prev = document.getElementById('prev-page');

// url que va sumando uno


let paginaActual = 1;

boton_next.addEventListener('click', () => {
    let urlActual = 'https://rickandmortyapi.com/api/character/?page=1'
    if (paginaActual < 42) {
        paginaActual += 1;
        urlActual = 'https://rickandmortyapi.com/api/character/?page='+ paginaActual;
    } else {
        return
    };
    fetch(urlActual)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Solicitud fallida');
        }
        return response.json();
    })
    .then((data) => {
         lista_personajes.innerHTML = data.results.map(personaje => {
            return `
            <div class= "card">
            <li><img src = ${personaje.image}></li>
            <p><span class="negrita">Name:</span> ${personaje.name}</p>
            <p><span class="negrita">Species:</span> ${personaje.species}</p>
            </div>
            `
         }).join('')
    })
    .catch((error) => {
        console.log('Error: no se pudo obtener la informacion');
    });
})

paginaActual = 1;

boton_prev.addEventListener('click', () => {
    let urlActual = 'https://rickandmortyapi.com/api/character/?page=1'
    if (paginaActual > 1) {
        paginaActual = paginaActual -1
        urlActual = 'https://rickandmortyapi.com/api/character/?page=' + paginaActual;
    } else {
        return
    };
    fetch(urlActual)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Solicitud fallida');
        }
        return response.json();
    })
    .then((data) => {
         lista_personajes.innerHTML = data.results.map(personaje => {
            return `
            <div class= "card">
            <li><img src = ${personaje.image}></li>
            <p><span class="negrita">Name:</span> ${personaje.name}</p>
            <p><span class="negrita">Species:</span> ${personaje.species}</p>
            </div>
            `
         }).join('')
    })
    .catch((error) => {
        console.log('Error: no se pudo obtener la informacion');
    });
})

