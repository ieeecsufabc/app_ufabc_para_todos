import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Map from './src/components/Map'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
      }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
      }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const options = {
    //This was a hack to enable the screen after a redux rehydrate
    animationEnabled: false,
    swipeEnabled: false,
};

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
}, options);

const App = createAppContainer(MainNavigator);

export default App;
