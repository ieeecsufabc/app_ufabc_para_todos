import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
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
  );
};

export default HomeScreen;
