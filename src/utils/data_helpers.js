const API_BASE = "https://pokeapi.co/api/v2/pokemon-form";

export const getPokemon = num => {
  console.log(num);
  return fetch(`${API_BASE}/${num}`)
    .then(res => {
      if (res.status !== 200) {
        console.log("No pokemons for you bud!");
      }
      return res.json();
    })
    .catch(err => {
      throw new Error("Can't get you your pokemon ", err);
    });
};
