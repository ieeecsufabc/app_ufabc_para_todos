import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ListScreen from './src/ListScreen';
import EventsScreen from './src/EventsScreen';
import Map from './src/components/Map';
import Map2 from './src/components/Map2';
import HowToGetScreen from './src/HowToGetScreen';
import MapsScreen from './src/MapsScreen'; 

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Eventos: EventsScreen,
<<<<<<< HEAD
    Mapas: MapsScreen,     //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
=======
    BlocoA: Map,
    Ginasio: Map2,     //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
>>>>>>> 7f76044d6329b4856b45b25ab075bc48e3b244f1
    ComoChegar: HowToGetScreen,
    BlocoA: Map,
    Ginasio: Map2
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'UFABC PARA TODOS - 2019'
    }
  }
);

export default createAppContainer(navigator);
