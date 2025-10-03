import { fetchPokemons } from "@/api/fetchPokemons";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface IPokemon {
  name: string;
  url: string;
  id: string;
  imageUrl: string;
}

interface PokemonContextType {
  pokemons: IPokemon[];
  loading: boolean;
  error: string | null;
}

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAllPokemons = async () => {
    setLoading(true);
    const data = await fetchPokemons();
    if (!data) {
      setError("Something went wrong");
    } else {
      setPokemons(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};
