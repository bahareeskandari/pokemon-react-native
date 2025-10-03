import { IPokemon } from "@/components/context/PokemonProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getList = async (key: string): Promise<IPokemon[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const currentList: IPokemon[] = jsonValue ? JSON.parse(jsonValue) : [];
    return currentList;
  } catch (e) {
    console.error("Error updating stored array:", e);
    return [];
  }
};

export const addToList = async (
  key: string,
  value: IPokemon
): Promise<void> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const currentList: IPokemon[] = jsonValue ? JSON.parse(jsonValue) : [];
    const foundExisting = currentList.find((item) => item.name === value.name);
    if (!foundExisting) {
      currentList.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(currentList));
    }
  } catch (e) {
    console.error("Error updating stored array:", e);
    return;
  }
};

export const removeFromList = async (
  key: string,
  id: string
): Promise<IPokemon[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (!jsonValue) return [];

    const currentList: IPokemon[] = JSON.parse(jsonValue);
    const updatedList = currentList.filter((item) => item.id !== id);

    await AsyncStorage.setItem(key, JSON.stringify(updatedList));
    return updatedList;
  } catch (e) {
    return [];
  }
};
