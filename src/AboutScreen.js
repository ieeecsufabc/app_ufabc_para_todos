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
        O evento conta com estandes que divulgam os cursos da universidade e também que apresentam os projetos pedagógicos da universidade e as pró-reitorias, além de atividades culturais, oficinas, palestras, visitas monitoradas ao espaço físico e exposições sobre as mais diversas atividades realizadas na Universidade.
        </Text>

        <View style={styles.boxbutton}>
          <TouchableOpacity 
          style={styles.button}
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
            width={Dimensions.get('window').width * .25}
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
    position:'relative',
    //backgroundColor: '#806cfa',
    height: 90,
    width: '46%',
    flex: 1,
    marginTop: 20,
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
  },
  title:{
    position:'relative',
    fontFamily: 'ScriptoramaMarkdownJF',
    textAlign:"center",
    fontSize: 45,
    color:'#752bff'
  }
});

export default AboutScreen;
