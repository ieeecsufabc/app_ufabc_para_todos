import React, {Component} from 'react';
import {Alert, Image, SafeAreaView, PixelRatio} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Marker from './Marker';
import { ginasioBalcoes, ginasioStands } from '../../data/markers';

class Map extends Component {
  onEventClick = (name, description) => {
    Alert.alert(
      name,
      description,
      [
        // {
        //   text: 'Ask me later',
        //   onPress: () => console.log('Ask me later pressed'),
        // },
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }; //...Do the stuff here

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={.5}
          zoomStep={.5}
          initialZoom={.7}
          bindToBorders={false}
          doubleTapDelay={0}
          longPressDuration={1100}
          style={{
            position: 'relative',
            flex: 0,
            width: PixelRatio.getPixelSizeForLayoutSize(212),
            height: PixelRatio.getPixelSizeForLayoutSize(299.81),
            justifyContent: 'center'
          }}
        >
          <Image
            style={{
              flex:0,
              width: PixelRatio.getPixelSizeForLayoutSize(212),
              height: PixelRatio.getPixelSizeForLayoutSize(299.81),
              resizeMode: 'contain'
            }}
            source={require('../../../assets/0002.jpg')}
            resizeMode="contain"
          />
          {ginasioStands.map(({name, description, top, left, width, height,color,fontSize}, index) => (
            <Marker
              onPress={() => this.onEventClick(name, description)}
              top={top}
              width={width}
              height={height}
              left={left}
              color={color}
              fontSize={fontSize}
              key={index}
              text={name}
            />
          ))}

          {ginasioBalcoes.map(({name, description, top, left, width, height,color,fontSize}, index) => (
            <Marker
              onPress={() => this.onEventClick(name, description)}
              top={top}
              width={width}
              height={height}
              left={left}
              color={color}
              fontSize={fontSize}                
              key={index}
              text={name}
            />
          ))}
        </ReactNativeZoomableView>
      </SafeAreaView>
    );
  }
}

export default Map;
