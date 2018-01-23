const API_BASE = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = () => {
  return fetch(`${API_BASE}/6`)
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
