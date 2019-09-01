import React, {Component} from 'react';
import {Alert, Image, View, SafeAreaView} from 'react-native';
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
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          // style={{
          //   padding: 10,
          //   backgroundColor: 'red',
          // }}
        >
          <Image
            style={{flex: 1, height: undefined, width: undefined}}
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
        </ReactNativeZoomableView>
      </SafeAreaView>
    );
  }
}

export default Map;
