import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Background from './components/Background';
import ScaledImg from './components/ScaledImg';
import { ScrollView } from 'react-native-gesture-handler';

const HowToGetScreen = ({ navigation }) => {
  return (
    
    <Background >
      <ScrollView>
       
      <View style={styles.Odin}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          var url = "https://goo.gl/maps/SzpjLQVn5BrkTNKa6";
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
        Abrir no google maps
      </Text>
      </TouchableOpacity>
      <Text >
        
      Local:Campus	Santo	André  Avenida	dos	Estados, 5001	-	Bairro	Santa Terezinha	-	Santo	André CEP:	09210-580
      </Text></View>
      
      <Text style={styles.bigText}>
        Transporte público
      </Text>
          <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/foto-mapa.png')}
          width={Dimensions.get('window').width * .7}
        />
        <Text>*Pegar o trem até a estação Celso Daniel
        </Text>
        <Text>
          *Descer a escada dentro do terminal
        </Text>
        </View>

        <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/foto-mapa.png')}
          width={Dimensions.get('window').width * .7}
        />
        <Text>*Virar a direita e suba a rampa</Text>
        </View>

        <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/foto-mapa.png')}
          width={Dimensions.get('window').width * .7}
        />
        <Text>*Você pode escolher entre ir de fretado ou andando</Text>
        </View>

        <View style={styles.Odin}>
        <ScaledImg
          source={require('../assets/foto-mapa.png')}
          width={Dimensions.get('window').width * .7}
        />
        <Text>texto 4</Text>
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
  bigText:{
    position:'relative',
    textAlign:"center",
    fontSize: 45,
    color:'black'
  }
});

export default HowToGetScreen;
