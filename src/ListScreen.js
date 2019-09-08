import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const events = [
    { name: 'O PRIMEIRO EVENTO DO DIA SERÁ AGRADECER PELO PESSOAL DO IEEE POR TEREM FEITO ESSE MARAVILHOSO APP!' },
    { name: 'Event #2' },
    { name: 'Event #3' },
    { name: 'Event #4' },
    { name: 'Event #5' },
    { name: 'Event #6' },
    { name: 'Event #7' },
    { name: 'Event #8' },
    { name: 'Event #9' }
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
    backgroundColor : '#F53',
    borderRadius: 20,
    color: 'white'
    //fontFamily :'OpenSans'
  }
});

export default ListScreen;
