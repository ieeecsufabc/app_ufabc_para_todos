import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ListScreen from './src/ListScreen';
import Map from './src/components/Map';
import Map2 from './src/components/Map2';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    BlocoA: Map,
    Quadra: Map2
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
