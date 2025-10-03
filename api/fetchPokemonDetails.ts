export const fetchPokemonDetails = async (id: string) => {
  try {
    const pokemonDetails = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const pokemonData = await pokemonDetails.json();
    return pokemonData;
  } catch (err) {
    return null;
  }
};
