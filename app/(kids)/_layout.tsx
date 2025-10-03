import { Stack } from "expo-router";

export default function KidsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "Pokemons" }}
      />
    </Stack>
  );
}
