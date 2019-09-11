import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import StandItem from './components/ListComponents/StandItem'
import Background from './components/Background'
import { allMapItems } from './data/markers';

const ListScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          // keyExtractor={event => event.name}
          data={allMapItems}
          renderItem={({ item: { name, description, builder, top, left, width, height } }) => {
            return <StandItem
              title={description}
              builder={builder}
              standNumber={name}
              navigation={navigation}
              top={top}
              left={left}
              width={width}
              height={height}
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
