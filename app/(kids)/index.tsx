import { PokemonContext } from "@/components/context/PokemonProvider";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  const styles = getStyles({ insets });

  const context = React.useContext(PokemonContext);
  const [pokemonList, setPokemonList] = React.useState<any[]>([]);

  if (!context) return;

  const { pokemons, loading, error } = context;

  React.useEffect(() => {
    setPokemonList(pokemons);
  }, [pokemons]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </View>
  );
}

const getStyles = ({ insets }: { insets: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF9C4",
      paddingTop: (insets = 10),
    },
  });
