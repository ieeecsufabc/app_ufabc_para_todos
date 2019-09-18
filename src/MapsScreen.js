import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView , Image, View } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Background from './components/Background';
const mapImage = require('../assets/ufabc-View2.png');

const calcImageHeight = (windowWidth) => {
  const { width, height } = Image.resolveAssetSource(mapImage);

  return height * (windowWidth / width)
}

const windowWidth = Dimensions.get('window').width;
const imageHeight = calcImageHeight(windowWidth);

const MapsScreen = ({ navigation }) => {
  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={.9}
          zoomStep={.5}
          initialZoom={.9}
          bindToBorders={false}
          doubleTapDelay={0}
          longPressDuration={1100}
          style={styles.Odin}
        > 
          <Image
            source={mapImage}
            style={{
              flex:0,
              width: windowWidth,
              height: imageHeight,
              resizeMode: 'center'
            }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.btnBlocoA}
            onPress={() => navigation.navigate('BlocoA')}
          >
            <Text style={styles.stext}>
                Bloco A
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnGinasio}
            onPress={() => navigation.navigate('Ginasio')}
          >
            <Text style={styles.stext}>
              Ginásio
            </Text>
          </TouchableOpacity>
        </ReactNativeZoomableView>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  Odin: {
    position: 'relative',
    flex: 0,
    width: windowWidth,
    height: imageHeight,
    justifyContent: 'center'
  },
  btnBlocoA: {
    position: 'absolute',
    backgroundColor: 'transparent',
    height: '20%',
    width: '65%',
    top: '22%',
    left: '14%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transform: [
      {rotate: '-33deg'}
    ]
  },
  btnGinasio: {
    position: 'absolute',
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(255, 0, 0, .7)',
    height: '23%',
    width: '35%',
    top: '42%',
    left: '45%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transform: [
      {rotate: '-40deg'}
    ]
  },
  stext: {
    fontFamily: 'IsidoraSansAlt-Bold',
    position: 'relative',
    textAlign: "center",
    fontSize: 25,
    width: '80%',
    color: 'green',
    backgroundColor: 'white',
    borderRadius: 5 
  }
});

export default MapsScreen;
