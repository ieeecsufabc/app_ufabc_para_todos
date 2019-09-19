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
          O evento UFABC para Todos é realizado anualmente pela Universidade Federal do ABC e tem como objetivo principal abrir as portas da Instituição para a comunidade, em especial aos alunos do 3º ano do Ensino Médio, de forma que todos possam conhecer um pouco mais sobre a Universidade. Em 2019, o evento terá sua décima edição no dia 26 de setembro no campus Santo André da UFABC.
        </Text>
        <Text style={styles.stext}>
          O evento conta com estandes que divulgam os cursos e que apresentam os projetos pedagógicos da universidade, além de atividades culturais, oficinas, palestras, visitas monitoradas ao espaço físico e exposições sobre diversas atividades realizadas na Universidade.
        </Text>

        <TouchableOpacity
            style={styles.buttonGreen}
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
            <Text style={styles.buttonGreenText}>
              Inscrição
            </Text>
          </TouchableOpacity>
        
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
            width={Dimensions.get('window').width * .20}
          />
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.buttonSite}
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
    flex: 1,
  },
  button: {
    position:'relative',
    //backgroundColor: '#806cfa',
    height: 80,
    width: '20%',
    flex: 1,
    marginHorizontal:50,
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreen: {
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
  buttonSite: {
    position:'relative',
    //backgroundColor: '#806cfa',
    height: 60,
    width: '20%',
    flex: 1,
    marginHorizontal:50,
    marginBottom: 30,
    marginTop: 30,
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
    fontSize: 16,
    lineHeight: 23,
    marginHorizontal:10,
    marginVertical: 10,
    color: 'white'
  },
  buttonGreenText: {
    position: 'relative',
    fontFamily: 'IsidoraSansAlt-Bold',
    textAlign: "center",
    fontSize: 25,
    color: 'white'
  },
  title:{
    position:'relative',
    fontFamily: 'ScriptoramaMarkdownJF',
    marginTop: 20,
    textAlign:"center",
    fontSize: 45,
    color:'#752bff'
  }
});

export default AboutScreen;
