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

class PathScreen01 extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="show map"
          color="#841584"
          onPress = {() =>
          navigation.navigate('Map')
        }
        />
        <Text>image 1</Text>

        <Button
          title="go back"
          color="#841584"
          onPress = {() =>
          navigation.goBack()
        }
        />
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
  }
});

export default PathScreen01;
