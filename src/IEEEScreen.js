import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Background from './components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import ScaledImg from './components/ScaledImg';

const IEEEScreen = ({ navigation }) => {
  return (
    
    <Background >
      <ScrollView>
       
      <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/logo.png')}
          width={Dimensions.get('window').width * .6}
        />
        <Text style={styles.title}>
            Quem somos nós?
        </Text>
    </View>   
    <Text style={styles.stext}>
    Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    </Text>
    <View style={styles.Odin}>
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
    flex: 1
  },
  button: {
    position:'relative',
    backgroundColor: '#806cfa',
    height: 90,
    width: '46%',
    flex: 1,
    marginTop:10,
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
  },
  title:{
    position:'relative',
    textAlign:"center",
    fontSize: 45,
    color:'black'
  }
});

export default IEEEScreen;
