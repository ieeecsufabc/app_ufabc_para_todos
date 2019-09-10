import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ListScreen from './src/ListScreen';
import EventsScreen from './src/EventsScreen';
// import Map from './src/components/Map';
import Map2 from './src/components/Map2';
import HowToGetScreen from './src/HowToGetScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Eventos: EventsScreen,
    Mapas: Map2,     //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
    ComoChegar: HowToGetScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'UFABC PARA TODOS - 2019'
    }
  }
);

export default createAppContainer(navigator);
