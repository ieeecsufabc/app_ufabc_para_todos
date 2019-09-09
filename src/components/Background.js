import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const Background= ({ children }) => {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.BGStyle}>
    { children } 
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  BGStyle: {
    width: '100%',
    height: '100%'
  }
});
export default Background;
