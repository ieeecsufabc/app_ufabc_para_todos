import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const events = [
    { 
      name: 'O PRIMEIRO EVENTO DO DIA SERÁ AGRADECER PELO PESSOAL DO IEEE POR TEREM FEITO ESSE MARAVILHOSO APP!',
      description:''
  },
    { 
      name: 'Event #2',
      description:''
  },
    { 
      name: 'Event #3',
      description:''
  },
    { 
      name: 'Event #4',
      description:''
  },
    { 
      name: 'Event #5',
      description:''
  },
    { 
      name: 'Event #6',
      description:''
  },
    { 
      name: 'Event #7',
      description:''
  },
    { 
      name: 'Event #8',
      description:''
  },
    { name: 'Event #9',
      description:''
     }
  ];

  return (
    <FlatList
      keyExtractor={event => event.name}
      data={events}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    margin: 30,
    fontSize: 18,
    padding: 20,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#fba930',
    borderRadius: 20,
    color: 'white'
    //fontFamily :'OpenSans'
  }
});

export default ListScreen;
