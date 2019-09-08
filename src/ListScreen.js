import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import StandItem from './components/ListComponents/StandItem'
import Background from './components/Background'

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

const ListScreen = () => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          keyExtractor={event => event.name}
          data={events}
          renderItem={({ item }) => {
            return <StandItem />;
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
