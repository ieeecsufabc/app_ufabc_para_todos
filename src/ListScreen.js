import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const events = [
    { name: 'Event #1' },
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
    marginVertical: 50
  }
});

export default ListScreen;
