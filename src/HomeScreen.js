import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, Image } from 'react-native';
import Background from './components/Background';

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.Odin}>
        
        <Image source={require('../assets/logo.png')} style={styles.Logostyle} resizeMode='contain' backgroundColor='red'/>
        
        <View style={styles.boxbutton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('List')}
          >
          <Text style={styles.stext}>
              {"Lista de Estandes"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BlocoA')}
          >
          <Text style={styles.stext}>
              {"Bloco A"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quadra')}
          >
            <Text style={styles.stext}>
              {"Quadra"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quadra')}
          >
            <Text style={styles.stext}>
              {"Quadra"}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  Odin:{
    position: 'relative',
//    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  Logostyle:{
    width: "80%",
  },
  button: {
    backgroundColor: '#806cfa',
    height: 90,
    width: '46%',
    flex: 0, 
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  boxbutton:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent : 'space-around'
  },
  stext:{
    position: 'relative',
    textAlign: "center",
    fontSize: 25,
    color: 'white'
    //width: '200%',
  }
});
export default HomeScreen;