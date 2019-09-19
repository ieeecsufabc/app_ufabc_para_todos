import React from 'react';
import {TouchableOpacity} from 'react-native';

const Marker = ({onPress, top, left, width, height}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height,
      width,
      position: 'absolute',
      top,
      left,
    }}>
  </TouchableOpacity>
);

export default Marker;
