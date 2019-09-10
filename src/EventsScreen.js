import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import StandItem from './components/ListComponents/StandItem'
import Background from './components/Background'
import { eventos} from './data/markers';

// const allMapItems = [
//   ...[
//     ...blocoABalcoes,
//     ...blocoAStands
//   ].map(item => ({...item, 'builder': 'Bloco A'})),
//   ...[
//     ...ginasioBalcoes,
//     ...ginasioStands
//   ].map(item => ({...item, 'builder': 'Ginásio'})),
// ];

const EventsScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          //keyExtractor={event => event.name}
          // data={allMapItems}
          // renderItem=({ item: { name, description, builder } }) => {
          //   return <EventItem
          //     title={description}
          //     builder={builder}
          //     standNumber={name}
          //     navigation={navigation}
          //   />;
          // }
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default EventsScreen;
