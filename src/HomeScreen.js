import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Background from './components/Background';
import ScaledImg from './components/ScaledImg';

const HomeScreen = ({ navigation }) => {
  return (
    <Background>

      <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/logo.png')}
          width={Dimensions.get('window').width * .8}
        />

        <View style={styles.boxbutton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('List')}
          >
            <Text style={styles.stext}>
              Estandes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Eventos')}
          >
            <Text style={styles.stext}>
              Eventos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Mapas')}
          >
            <Text style={styles.stext}>
              Mapas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ComoChegar')}
          >
            <Text style={styles.stext}>
              Como chegar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  Odin: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },
  button: {
    backgroundColor: '#2c6633',
    height: 90,
    width: '46%',
    flex: 0,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxbutton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  stext: {
    position: 'relative',
    textAlign: "center",
    fontSize: 25,
    color: 'white'
  }
});

export default HomeScreen;
