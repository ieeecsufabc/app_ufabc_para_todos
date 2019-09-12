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
            <Text style={styles.buttontext}>
              Estandes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Eventos')}
          >
            <Text style={styles.buttontext}>
              Eventos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Mapas')}
          >
            <Text style={styles.buttontext}>
              Mapas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ComoChegar')}
          >
            <Text style={styles.buttontext}>
              Como chegar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.sobre}>
              Sobre o Evento
            </Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity
            style={styles.textbox}
            onPress={() => navigation.navigate('IEEE')}
          >
            <Text style={styles.sobre}>
              Conheça mais sobre o IEEE
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
    justifyContent: 'space-around',
    flex: 1,
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
  button2:{
    backgroundColor: '#2c6633',
    height: 40,
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
  buttontext: {
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    textAlign: "center",
    fontSize: 23,
    color: 'white'
  },
  textbox: {
    position: 'relative',
    fontFamily: 'IsidoraSansAlt-Bold',
    flex:0,
    justifyContent: 'center',
    textAlign: "center"
  },
  sobre: {
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    justifyContent: 'center',
    textAlign: "center",
    //marginTop:10,
    fontSize: 15,
    color: 'white'
  },

});

export default HomeScreen;
