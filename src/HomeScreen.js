import React from 'react';
import { View, StyleSheet ,Button,ImageBackground } from 'react-native';
import Background from './components/Background'

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
    <View>
      <Button
        title="Lista"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="BlocoA"
        onPress={() => navigation.navigate('BlocoA')}
      />
      <Button
        title="Quadra"
        onPress={() => navigation.navigate('Quadra')}
      />
    </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    margin: 30,
    fontSize: 18,
    padding: 20,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#F53',
    borderRadius: 20,
  }
});
export default HomeScreen;
