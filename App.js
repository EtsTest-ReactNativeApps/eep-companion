import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import SplashScreen from './screens/splashScreen.js';
import IntroScreen from './screens/introScreen.js';
import MapScreen from './screens/mapScreen.js';
import PathScreen from './screens/pathScreen.js';
import ActivityListScreen from './screens/activityListScreen.js';
import EndScreen from './screens/endScreen.js';
import ActivityScreen from './screens/activityScreen.js';


const App = createStackNavigator({
  Splash: { screen: SplashScreen },
  Intro: {screen: IntroScreen },
  Map: {screen: MapScreen },
  Path: {screen: PathScreen },
  ActivityList: {screen: ActivityListScreen},
  End: {screen: EndScreen},
  Activity: {screen: ActivityScreen},
},{
  initialRouteName:'Splash',
});

export default App;
