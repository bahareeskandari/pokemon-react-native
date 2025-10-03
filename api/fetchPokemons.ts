interface IBasicPokemon {
  name: string;
  url: string;
}

export const fetchPokemons = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    if (!res.ok) throw new Error("Failed to fetch Pokémon");

    const data = await res.json();
    const mappedData = data.results.map((item: IBasicPokemon) => {
      const parts = item.url.slice(0, -1).split("/");
      const uniqId = parts[parts.length - 1];
      return {
        name: item.name,
        url: item.url,
        id: uniqId,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${uniqId}.png`,
      };
    });
    return mappedData;
  } catch (err: any) {
    return null;
  }
};
