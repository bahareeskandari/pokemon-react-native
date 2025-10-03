import { PokemonProvider } from "@/components/context/PokemonProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PokemonProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, headerTitle: "" }}
        />
        <Stack.Screen
          name="(kids)"
          options={{ headerShown: true, headerTitle: "Pokemons" }}
        />
        <Stack.Screen
          name="(mainNavigationTabsParents)"
          options={{ headerShown: true, headerTitle: "Parents" }}
        />
        <Stack.Screen
          name="pokemon/[id]"
          options={{ headerShown: true, headerTitle: "Pokemon Details" }}
        />
      </Stack>
    </PokemonProvider>
  );
}
