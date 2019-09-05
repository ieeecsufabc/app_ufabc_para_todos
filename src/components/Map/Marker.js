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
          left: '15%',
          top: '15%',
          fontSize: 14,
          width: '200%',
        }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Marker;
