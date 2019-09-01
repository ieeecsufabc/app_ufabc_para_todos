import React, {Component} from 'react';
import {Alert, Image, View, SafeAreaView, Dimensions, PixelRatio} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Header from '../Header';
import Marker from './Marker';
import {rooms, stands} from './markers';

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
        <Header text="UFABC Para Todos!" />
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={.5}
          zoomStep={.5}
          initialZoom={.7}
          bindToBorders={false}
          onZoomAfter={this.logOutZoomState}
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(212),
            height: PixelRatio.getPixelSizeForLayoutSize(299.81),
          }}
        >
          <View
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
              source={require('../../images/0001.jpg')}
              resizeMode="contain"
            />
            {stands.map(({name, description, top, left}, index) => (
              <Marker
                onPress={() => this.onEventClick(name, description)}
                top={top}
                width="3.1%"
                height="2.3%"
                left={left}
                color="yellow"
                key={index}
                text={name}
              />
            ))}

          {rooms.map(({name, description, top, left}, index) => (
              <Marker
                onPress={() => this.onEventClick(name, description)}
                top={top}
                width='15.7%'
                height='8%'
                left={left}
                color="red"
                key={index}
                text={name}
              />
            ))}
          </View>
        </ReactNativeZoomableView>
      </SafeAreaView>
    );
  }
}

export default Map;
