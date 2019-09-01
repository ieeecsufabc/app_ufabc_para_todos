import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const Marker = ({onPress, top, left, color, width, height, text}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height,
      width,
      backgroundColor: color,
      position: 'absolute',
      top,
      left,
    }}>
    <View style={{flex: 1, position: 'relative'}}>
      <Text
        style={{
          position: 'absolute',
          left: '110%',
          top: '50%',
          fontSize: 4,
          alignSelf: 'center',
          width: '200%',
        }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Marker;
