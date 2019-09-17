import React, {Component} from 'react';
import {Alert, Image, SafeAreaView, Dimensions} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Marker from './Marker';
import DefaultMaker from '../DefaultMaker';
import { blocoABalcoes, blocoAStands } from '../../data/markers';

const mapImage = require('../../../assets/0001.png');

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
        {text: 'OKK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }; //...Do the stuff here
  
  calcImageHeight(windowWidth) {
    const { width, height } = Image.resolveAssetSource(mapImage);

    return height * (windowWidth / width)
  }

  render() {
    const windowWidth = Dimensions.get('window').width;
    const imageHeight = this.calcImageHeight(windowWidth);
    const defaultMakerPosition = this.props.navigation.getParam('defaultMakerPosition', null);

    return (
      <SafeAreaView style={{flex: 1}}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={.9}
          zoomStep={.5}
          initialZoom={.9}
          bindToBorders={false}
          doubleTapDelay={0}
          longPressDuration={1100}
          style={{
            position: 'relative',
            flex: 0,
            width: windowWidth,
            height: imageHeight,
            marginRight: 20,
            justifyContent: 'center'
          }}
        >
          <Image
            style={{
              flex:0,
              width: windowWidth,
              height: imageHeight,
              marginRight: 20,
              resizeMode: 'center'
            }}
            source={mapImage}
            resizeMode="contain"
          />
          {blocoAStands.map(({name, description, top, left, width, height,color,fontSize}, index) => (
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

          {blocoABalcoes.map(({name, description, top, left, width, height,color,fontSize}, index) => (
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

          {defaultMakerPosition && <DefaultMaker {...defaultMakerPosition} />}
        </ReactNativeZoomableView>
      </SafeAreaView>
    );
  }
}

export default Map;
