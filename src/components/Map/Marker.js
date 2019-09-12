import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const Marker = ({onPress, top, left, color, width, height, text,fontSize}) => (
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
    <View style={{flex: 1, position: 'relative',alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontFamily: 'IsidoraSansAlt-Bold',
          position: 'relative',
          transform: [{ rotate: '270deg'}],
          fontSize,
        }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Marker;
