import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import usePokemon from "@/hooks/usePokemon";
import { useEffect } from "react";

export function Details({ navigation, route }) {
  const { pokemon , loading, error} = usePokemon(route.params.name);

  

  useEffect(() => {
    console.log(pokemon, loading, error?.message)
}, [loading])

function handleClick() {
  navigation.navigate("Home");
}

  return (
    <TouchableOpacity onPress={handleClick}>
      <View>
        <Text style={styles.name}>{pokemon?.name}</Text>
     </View>
     <View>
     <Text style={styles.id}>#{pokemon?.id}</Text>
     </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: pokemon?.sprites.front_default,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    borderRadius: 20,
    alignSelf: "center",
  },
  id: {
    color: "black",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
