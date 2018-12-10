import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';

import globalStyles from '../styles/globalStyles.js';
import ModButton from '../components/modButton.js';

class SplashScreen extends Component {
  static navigationOptions = {
    header:null,
  }
  
  render() {
    const { navigation } = this.props;

    return (
      <View style={globalStyles.container}>
        <Text>Educational Environmental Path.</Text>
        <Text>Le Fagotin A.S.B.L.</Text>
        <ModButton
          title="go on"
          onPress = {() =>
            navigation.reset([NavigationActions.navigate({ routeName: 'Intro' })], 0)
          }
         />
      </View>
    )
  }
}

export default SplashScreen;
