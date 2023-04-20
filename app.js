fetch("https://rickandmortyapi.com/api/character")
  .then((response) => { return response.json(); })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <div class="personaje-info">
        <img class="personaje-image" src="${personajes[i].image}">
        <h3 class="nombre-personaje">${personajes[i].name}</h3>
        <p>Genero:${personajes[i].gender}</p>
        <p>Especie:${personajes[i].species}</p>
        <p>Estado:${personajes[i].status}</p>
       </div>
      </div>
      ` };
  });