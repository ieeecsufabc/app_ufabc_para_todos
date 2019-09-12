import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Background from './components/Background';
import ScaledImg from './components/ScaledImg';

const MapsScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.Odin}>  
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BlocoA')}
          >
          <ScaledImg
            source={require('../assets/foto-mapa.png')}
            width={Dimensions.get('window').width * .8}
          />
          <Text style={styles.stext}>
            Bloco A
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ginasio')}
          >
          <ScaledImg
            source={require('../assets/foto-mapa.png')}
            width={Dimensions.get('window').width * .8}
          />
          <Text style={styles.stext}>
              Ginásio
          </Text>
        </TouchableOpacity>

      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  Odin: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-evenly',
    flex: 1
  },
  button: {
    backgroundColor: 'transparent',
    height: '28%',
    width: '80%',
    flex: 0,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxbutton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  stext: {
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    textAlign: "center",
    fontSize: 25,
    width: '80%',
    color: 'green',
    backgroundColor: 'white',
    marginTop: 2,
    borderRadius: 5 
  }
});

export default MapsScreen;
