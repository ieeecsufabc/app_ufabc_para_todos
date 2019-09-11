import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Background from './components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import ScaledImg from './components/ScaledImg';

const AboutScreen = ({ navigation }) => {
  return (
    
    <Background >
      <ScrollView>
       
      <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/logo.png')}
          width={Dimensions.get('window').width * .6}
        />
        <Text style={styles.title}>
            O que é o UFABC PRA TODOS?
        </Text>
        <Text style={styles.stext}>
          Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n           Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Text>

        <View style={styles.boxbutton}>
          <TouchableOpacity 
          //style={styles.button}
          onPress={() => {
            var url = "https://www.facebook.com/events/785951678423517/?ti=wa";
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Cant handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err)); 
          }}
          >
          <ScaledImg
            source={require('../assets/facebook-icone.png')}
            width={Dimensions.get('window').width * .3}
          />
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var url = "http://paratodos.ufabc.edu.br/";
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Cant handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err)); 
          }}
          >
            <Text style={styles.stext}>
              Site
            </Text>
          </TouchableOpacity>

        </View>
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
    backgroundColor: '#2c6633',
    height: 70,
    width: '36%',
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
  },
  title:{
    position:'relative',
    textAlign:"center",
    fontSize: 45,
    color:'black'
  }
});

export default AboutScreen;
