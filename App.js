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
    Quadra: Map2 //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'UFABC PARA TODOS - 2019'
    }
  }
);

export default createAppContainer(navigator);
