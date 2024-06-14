import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card({data = null, navigation}) {

   console.log(data)
   

   function handleClick(){
    navigation.navigate("Details", {name: data?.url})
    }

  return (

    <TouchableOpacity style = {styles.container} onPress={handleClick}>
        <Text>{data?.name}</Text>
    </TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0b5f78',
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 10,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
  },
  cardContent: {
      alignItems: 'center',
  },
  cardTitle: {
      color: 'white',
      fontSize: 40,
  },
});
