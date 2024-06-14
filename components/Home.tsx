import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from './Card';



export function Home({navigation}) {

    const pageLimit = 10
    const [limit, setLimit ] = useState(pageLimit)
    const [offset, setOffset ] = useState(0)

    const {list, loading, error} = useFetch(limit, offset)
    useEffect(() => {
        console.log(list, loading, error?.message)
    }, [loading])

    function handleClick(){
        setLimit(limit + pageLimit)
    }

  return (

    <View onPress={handleClick}>
        {list.map((element, index) => (<Card key={element?.id || index} data={element} navigation={navigation}/>))}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
  },
  list: {
      paddingBottom: 20,
  },
  error: {
      color: 'red',
      textAlign: 'center',
      marginVertical: 10,
  },
  button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
});
