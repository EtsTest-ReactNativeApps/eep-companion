import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import SplashScreen from './screens/splashScreen.js';
import IntroScreen from './screens/introScreen.js';
import PathInfoScreen from './screens/pathInfoScreen.js';
import MapScreen from './screens/mapScreen.js';
import PathScreen from './screens/pathScreen.js';
import ActivityListScreen from './screens/activityListScreen.js';
import ActivityScreen from './screens/activityScreen.js';

const App = createStackNavigator({
  Splash: { screen: SplashScreen },
  Intro: {screen: IntroScreen },
  Map: {screen: MapScreen },
  Path: {screen: PathScreen },
  ActivityList: {screen: ActivityListScreen},
  Activity: {screen: ActivityScreen},
  PathInfo: {screen: PathInfoScreen}
},{
  initialRouteName:'Splash',
  //initialRouteParams:{'id':0},
  cardStyle: {
      opacity: 1, //this fixes the white flash between screens.
    }
});

export default App;
