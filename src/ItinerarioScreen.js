import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Background from './components/Background';
import ScaledImg from './components/ScaledImg';
import { ScrollView } from 'react-native-gesture-handler';

const ItinerarioScreen = ({ navigation }) => {
  return (
    
    <Background >
      <ScrollView>
       
      <Text>APLICAR ITINERÁRIO</Text>
      <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/foto-mapa.png')}
          width={Dimensions.get('window').width * .7}
        />
        </View>
        </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  Odin: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    fontSize:40
  },
  button: {
    position:'relative',
    backgroundColor: '#2c6633',
    height: 50,
    width: '70%',
    flex: 1,
    marginTop:10,
    marginBottom: 10,
    borderRadius: 14,
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
  },
  bigText:{
    position:'relative',
    textAlign:"center",
    fontSize: 45,
    color:'black'
  },
  infoText: {
    position: 'relative',
    textAlign: "center",
    fontSize: 20,
    color: 'black',
    width:'90%'
  },

});

export default ItinerarioScreen;
