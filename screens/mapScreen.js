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

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    const { navigation } = this.props;
    let map = require('../assets/map.jpg');

    return (
      <View style={styles.container}>
        <Image resizeMode='cover' style={styles.map} source={map} />
        {/* TODO make this A.cover whole screen and B.resizeable */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  map: {
    // flex:1
  }
});

export default MapScreen;
