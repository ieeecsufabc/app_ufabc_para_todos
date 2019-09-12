import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Background from './components/Background';
import ScaledImg from './components/ScaledImg';
import { ScrollView } from 'react-native-gesture-handler';

const ItinerarioScreen = ({ navigation }) => {
  return (
    
    <Background >
      <ScrollView>
       
      <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/HORARIOS-1.png')}
          width={Dimensions.get('window').width * .95}
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
    fontSize:40,
    marginTop: 25
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
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    textAlign: "center",
    fontSize: 25,
    color: 'white'
  }

});

export default ItinerarioScreen;
