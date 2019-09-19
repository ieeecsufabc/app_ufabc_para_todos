import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import StandItem from './components/ListComponents/StandItem';
import Background from './components/Background';
import {allMapItems} from './data/markers';

const itemsSorted = [...allMapItems].sort((a, b) => {
  const x = a.description.toLowerCase();
  const y = b.description.toLowerCase();
  
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

const ListScreen = ({navigation}) => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(_item, index) => index.toString()}
          data={itemsSorted}
          renderItem={({
            item: {name, description, builder, top, left, width, height},
          }) => {
            return (
              <StandItem
                title={description}
                builder={builder}
                standNumber={name}
                navigation={navigation}
                top={top}
                left={left}
                width={width}
                height={height}
              />
            );
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ListScreen;
