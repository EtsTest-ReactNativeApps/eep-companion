import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  ToolbarAndroid,
  Button,
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={[styles.container, homeStyles.container]}>
        <View style={homeStyles.button}>
          <Text>New.</Text>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  }
});

const homeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:'#340068',
  },
  button: {
    marginTop:10*PixelRatio.get()
  } //you can't style the basic React Native <Button> element.
})

export default HomeScreen;
