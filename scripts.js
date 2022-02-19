const baseURL = "https://pokeapi.co/api/v2/";


const pokeForm = document.querySelector("#pokemon-form");

pokeForm.addEventListener("submit", fetchPokemon);

function fetchPokemon(e) {
    e.preventDefault();
    const search = document.querySelector("#search").value
    const searchType = document.querySelector("#searchType").value
    const URL = `${baseURL}${searchType}/${search}`

    fetch(URL)
        .then(response => response.json())
        .then(result => showResult(result, searchType));
}

function showResult(result, searchType) {
    const results = document.querySelector("#results");
    if (searchType == "pokemon") {
        results.innerHTML = ""
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `<img src=${result.sprites.front_default} class="card-img-top" alt="">
      <div class="card-body text-center">
        <h5 class="card-title">${result.name}</h5>
        <p class="card-text">Weight: ${result.base_experience}</p>
        <p class="card-text">Base Exp: ${result.weight}</p>
      </div>`;
      results.appendChild(div)

    }
} 