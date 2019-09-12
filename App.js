import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ListScreen from './src/ListScreen';
import EventsScreen from './src/EventsScreen';
import Map from './src/components/Map';
import Map2 from './src/components/Map2';
import HowToGetScreen from './src/HowToGetScreen';
import MapsScreen from './src/MapsScreen'; 
import AboutScreen from './src/AboutScreen';
import IEEEScreen from './src/IEEEScreen';
import ItinerarioScreen from './src/ItinerarioScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Eventos: EventsScreen,
    Mapas: MapsScreen,     //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
    BlocoA: Map,
    Ginasio: Map2,     //precisamos colocar um item na lista para uma lista de stands e tals, para que dessa lista a pessoa consiga acessar o mapa
    ComoChegar: HowToGetScreen,
    About: AboutScreen,
    IEEE: IEEEScreen,
    Itinerario: ItinerarioScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'UFABC PARA TODOS - 2019'
    }
  }
);

const AppContainer = createAppContainer(navigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}