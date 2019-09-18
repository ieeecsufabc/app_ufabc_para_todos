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
      <Text style={styles.infoText}>
        
      Local:Campus	Santo	André  Avenida	dos	Estados, 5001	-	Bairro	Santa Terezinha	-	Santo	André CEP:	09210-580
      </Text></View>
      
      <Text style={styles.bigText}>
        Transporte público
      </Text>
          <View style={styles.Odin}>
            <Text style={styles.infoText}>*Pegar o trem até a estação Celso Daniel
            </Text>
            <Text style={styles.infoText}>
              *Descer a escada dentro do terminal
            </Text>
            <ScaledImg
              source={require('../assets/foto-mapa.png')}
              width={Dimensions.get('window').width * .7}
            />
          </View>

        <View style={styles.Odin}>
        <Text style={styles.infoText}>
              *Procurar a rampa de acesso ao ponto do fretado
            </Text>
        <ScaledImg
          source={require('../assets/foto-antes-corredor.jpeg')}
          width={Dimensions.get('window').width * .7}
        />
        
        </View>

        <View style={styles.Odin}>
          <Text style={styles.infoText}>*Vire a direita e suba a rampa</Text>
        <ScaledImg
          source={require('../assets/foto-entrada-corredor.jpeg')}
          width={Dimensions.get('window').width * .7}
        />
        <ScaledImg
          source={require('../assets/foto-corredor.jpeg')}
          width={Dimensions.get('window').width * .7}
        />
        
        </View>

        <View style={styles.Odin}>
          <Text style={styles.infoText}>*Você pode escolher entre ir de fretado ou andando</Text>
        <ScaledImg
          source={require('../assets/foto-ponto.jpeg')}
          width={Dimensions.get('window').width * .7}
        />
        
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Itinerario')}
          >
            <Text style={styles.stext}>
              Itinerário do fretado
            </Text>
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
    flex: 1,
    fontSize:40,
    marginBottom:25
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
    fontFamily: 'IsidoraSansAlt-Bold',
    textAlign: "center",
    fontSize: 25,
    color: 'white'
  },
  bigText:{
    position:'relative',
    fontFamily: 'IsidoraSansAlt-Bold',
    textAlign:"center",
    fontSize: 40,
    color:'black'
  },
  infoText: {
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    textAlign: "center",
    fontSize: 18,
    color: 'black',
    width:'90%'
  },

});

export default HowToGetScreen;
