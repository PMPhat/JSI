function getPokemon(string) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${string}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#pokemonName").innerHTML = `
      <div>
        <img src="${data.sprites.front_shiny_female}"
          alt="${data.name}" />
       </div>
       <div class="pokemonInfos">
        <h3>${data.name}</h3>
          <p>Weight:${data.weight}</p>
      </div>
     </div>
      `;
    })

    .catch((error) => {
      console.log(error);
    });
}

getPokemon("pikachu");

//       <div class="pokemonInfos">
//         <h1>Pikachu</h3>
//           <p>Weight: 60</p>
//       </div>
//     </div>
