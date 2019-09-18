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
          source={require('../assets/ieee_resized.png')}
          width={Dimensions.get('window').width * .6}
        />
        <Text style={styles.title}>
            Quem somos nós?
        </Text>
    </View>
    <Text style={styles.stext}>
    O IEEE (lê-se I,3,É) é um instituto com profissionais ao redor de todo mundo desenvolvendo pesquisas e tecnologias em diversas áreas. Nas universidades o IEEE está presente em mais de 140 países e tem diversas sedes no Brasil, sendo uma na Universidade Federal do ABC. Aqui, desenvolvemos projetos, cursos e atividades nas áreas de engenharia da UFABC que são Aeroespacial, Biomédica, Energia, Gestão, Instrumentação Automação e Robótica, Materiais e Ciências da Computação. Para saber mais, siga-nos nas redes sociais.
    </Text>
    <View style={styles.boxbutton}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          var url = "https://pt-br.facebook.com/RamoUFABC/";
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
        style={styles.button}
        onPress={() => {
          var url = "https://www.instagram.com/ieeeufabc/?hl=pt";
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
          source={require('../assets/instagram-icone.png')}
          width={Dimensions.get('window').width * .20}
        />
      </TouchableOpacity>

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
    height: 80,
    width: '20%',
    flex: 1,
    marginHorizontal:50,
    marginBottom: 30,
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
    position: 'relative',
    fontFamily: 'IsidoraSansAlt-Bold',
    textAlign: "center",
    lineHeight: 23,
    marginHorizontal:10,
    marginTop: 20,
    fontSize: 16,
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

export default IEEEScreen;
