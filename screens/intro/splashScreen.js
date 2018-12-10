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
} from 'react-navigation';

class SplashScreen extends Component {
  static navigationOptions = {
    header:null,
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>EEP, oops.</Text>
        <Button
          title="Learn More"
          color="#841584"
          onPress = {() =>
          navigate('IntroText')
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

export default SplashScreen;
