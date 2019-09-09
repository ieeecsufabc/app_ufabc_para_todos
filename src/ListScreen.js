import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import StandItem from './components/ListComponents/StandItem'
import Background from './components/Background'
import {
  blocoABalcoes,
  blocoAStands,
  ginasioBalcoes,
  ginasioStands
} from './data/markers';

const allMapItems = [
  ...[
    ...blocoABalcoes,
    ...blocoAStands
  ].map(item => ({...item, 'builder': 'Bloco A'})),
  ...[
    ...ginasioBalcoes,
    ...ginasioStands
  ].map(item => ({...item, 'builder': 'Ginásio'})),
];

const ListScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          // keyExtractor={event => event.name}
          data={allMapItems}
          renderItem={({ item: { name, description, builder } }) => {
            return <StandItem
              title={description}
              builder={builder}
              standNumber={name}
              navigation={navigation}
            />;
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
});

export default ListScreen;
